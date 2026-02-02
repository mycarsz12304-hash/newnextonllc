"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Upload, FileText, Download, Trash2, Eye } from "lucide-react";

interface Document {
  id: string;
  lead_id: string;
  file_name: string;
  file_url: string;
  uploaded_at: string;
  lead?: {
    name: string;
    email: string;
  };
}

interface Lead {
  id: string;
  name: string;
  email: string;
}

export default function DocumentsPage() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [selectedLeadId, setSelectedLeadId] = useState("");
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const supabase = createClient();

    // Fetch documents with lead info
    const { data: docs } = await supabase
      .from("documents")
      .select("*, lead:leads(name, email)")
      .order("uploaded_at", { ascending: false });

    // Fetch all leads for the dropdown
    const { data: leadsData } = await supabase
      .from("leads")
      .select("id, name, email")
      .order("created_at", { ascending: false });

    if (docs) setDocuments(docs as any);
    if (leadsData) setLeads(leadsData);
    setLoading(false);
  }

  async function uploadDocument() {
    if (!uploadFile || !selectedLeadId) return;

    setUploading(true);
    const supabase = createClient();

    // For demo purposes, we'll store a placeholder URL
    // In production, you'd upload to Supabase Storage or another service
    const fileUrl = `/documents/${Date.now()}-${uploadFile.name}`;

    const { error } = await supabase.from("documents").insert({
      lead_id: selectedLeadId,
      file_name: uploadFile.name,
      file_url: fileUrl,
    });

    if (!error) {
      fetchData();
      setIsUploadOpen(false);
      setUploadFile(null);
      setSelectedLeadId("");
    }
    setUploading(false);
  }

  async function deleteDocument(id: string) {
    if (!confirm("Are you sure you want to delete this document?")) return;

    const supabase = createClient();
    const { error } = await supabase.from("documents").delete().eq("id", id);

    if (!error) {
      fetchData();
    }
  }

  const filteredDocuments = documents.filter((doc) => {
    const leadName = (doc.lead as any)?.name || "";
    const leadEmail = (doc.lead as any)?.email || "";
    return (
      doc.file_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      leadName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      leadEmail.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Documents</h1>
          <p className="text-muted-foreground">Manage client documents and files</p>
        </div>
        <Button onClick={() => setIsUploadOpen(true)}>
          <Upload className="h-4 w-4 mr-2" />
          Upload Document
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by file name or client..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
        </CardContent>
      </Card>

      {/* Documents Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>File Name</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Uploaded</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDocuments.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-8">
                    <FileText className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-muted-foreground">No documents found</p>
                  </TableCell>
                </TableRow>
              ) : (
                filteredDocuments.map((doc) => (
                  <TableRow key={doc.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{doc.file_name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{(doc.lead as any)?.name || "Unknown"}</p>
                        <p className="text-sm text-muted-foreground">
                          {(doc.lead as any)?.email || ""}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      {new Date(doc.uploaded_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="icon" asChild>
                          <a href={doc.file_url} target="_blank" rel="noopener noreferrer">
                            <Eye className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                          <a href={doc.file_url} download>
                            <Download className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => deleteDocument(doc.id)}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Upload Dialog */}
      <Dialog open={isUploadOpen} onOpenChange={setIsUploadOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload Document</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Select Client</Label>
              <Select value={selectedLeadId} onValueChange={setSelectedLeadId}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a client" />
                </SelectTrigger>
                <SelectContent>
                  {leads.map((lead) => (
                    <SelectItem key={lead.id} value={lead.id}>
                      {lead.name} ({lead.email})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>File</Label>
              <Input
                type="file"
                onChange={(e) => setUploadFile(e.target.files?.[0] || null)}
              />
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsUploadOpen(false)}>
                Cancel
              </Button>
              <Button
                onClick={uploadDocument}
                disabled={!uploadFile || !selectedLeadId || uploading}
              >
                {uploading ? "Uploading..." : "Upload"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
