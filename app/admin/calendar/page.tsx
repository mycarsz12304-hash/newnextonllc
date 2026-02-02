"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight, Plus, Trash2, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Consultation {
  id: string;
  lead_id: string | null;
  title: string;
  date: string;
  time: string | null;
  notes: string | null;
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

export default function CalendarPage() {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [newConsultation, setNewConsultation] = useState({
    title: "",
    date: "",
    time: "",
    lead_id: "",
    notes: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const supabase = createClient();

    const { data: consultData } = await supabase
      .from("consultations")
      .select("*, lead:leads(name, email)")
      .order("date", { ascending: true });

    const { data: leadsData } = await supabase
      .from("leads")
      .select("id, name, email")
      .order("created_at", { ascending: false });

    if (consultData) setConsultations(consultData as any);
    if (leadsData) setLeads(leadsData);
    setLoading(false);
  }

  async function addConsultation() {
    if (!newConsultation.title || !newConsultation.date) return;

    const supabase = createClient();
    const { error } = await supabase.from("consultations").insert({
      title: newConsultation.title,
      date: newConsultation.date,
      time: newConsultation.time || null,
      lead_id: newConsultation.lead_id || null,
      notes: newConsultation.notes || null,
    });

    if (!error) {
      fetchData();
      setIsAddOpen(false);
      setNewConsultation({ title: "", date: "", time: "", lead_id: "", notes: "" });
    }
  }

  async function deleteConsultation(id: string) {
    if (!confirm("Are you sure you want to delete this consultation?")) return;

    const supabase = createClient();
    const { error } = await supabase.from("consultations").delete().eq("id", id);

    if (!error) {
      fetchData();
    }
  }

  // Calendar helpers
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days: (number | null)[] = [];
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const formatDate = (year: number, month: number, day: number) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  };

  const getConsultationsForDate = (day: number) => {
    const dateStr = formatDate(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    return consultations.filter((c) => c.date === dateStr);
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const days = getDaysInMonth(currentDate);
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

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
          <h1 className="text-2xl font-bold">Calendar</h1>
          <p className="text-muted-foreground">Schedule consultations and meetings</p>
        </div>
        <Button onClick={() => setIsAddOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Consultation
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Calendar */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={prevMonth}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextMonth}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-1 mb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-medium text-muted-foreground py-2"
                >
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {days.map((day, index) => {
                if (day === null) {
                  return <div key={index} className="aspect-square" />;
                }

                const dayConsultations = getConsultationsForDate(day);
                const isToday =
                  new Date().toDateString() ===
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    day
                  ).toDateString();

                return (
                  <button
                    key={index}
                    onClick={() => {
                      const dateStr = formatDate(
                        currentDate.getFullYear(),
                        currentDate.getMonth(),
                        day
                      );
                      setSelectedDate(dateStr);
                      setNewConsultation({ ...newConsultation, date: dateStr });
                      setIsAddOpen(true);
                    }}
                    className={cn(
                      "aspect-square p-1 rounded-lg text-sm transition-colors hover:bg-muted relative",
                      isToday && "bg-primary/10 font-bold"
                    )}
                  >
                    <span>{day}</span>
                    {dayConsultations.length > 0 && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-primary" />
                    )}
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Consultations */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming</CardTitle>
          </CardHeader>
          <CardContent>
            {consultations.length === 0 ? (
              <p className="text-muted-foreground text-center py-4">
                No consultations scheduled
              </p>
            ) : (
              <div className="space-y-3">
                {consultations.slice(0, 10).map((consultation) => (
                  <div
                    key={consultation.id}
                    className="p-3 rounded-lg border space-y-2"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium">{consultation.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(consultation.date).toLocaleDateString()}
                          {consultation.time && ` at ${consultation.time}`}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteConsultation(consultation.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                    {(consultation.lead as any)?.name && (
                      <p className="text-sm">
                        Client: {(consultation.lead as any).name}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Add Consultation Dialog */}
      <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Consultation</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Title</Label>
              <Input
                value={newConsultation.title}
                onChange={(e) =>
                  setNewConsultation({ ...newConsultation, title: e.target.value })
                }
                placeholder="Consultation with..."
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Date</Label>
                <Input
                  type="date"
                  value={newConsultation.date}
                  onChange={(e) =>
                    setNewConsultation({ ...newConsultation, date: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>Time</Label>
                <Input
                  type="time"
                  value={newConsultation.time}
                  onChange={(e) =>
                    setNewConsultation({ ...newConsultation, time: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Client (Optional)</Label>
              <Select
                value={newConsultation.lead_id}
                onValueChange={(value) =>
                  setNewConsultation({ ...newConsultation, lead_id: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a client" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No client</SelectItem>
                  {leads.map((lead) => (
                    <SelectItem key={lead.id} value={lead.id}>
                      {lead.name} ({lead.email})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Notes</Label>
              <Textarea
                value={newConsultation.notes}
                onChange={(e) =>
                  setNewConsultation({ ...newConsultation, notes: e.target.value })
                }
                placeholder="Add any notes..."
                rows={3}
              />
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsAddOpen(false)}>
                Cancel
              </Button>
              <Button onClick={addConsultation}>Add Consultation</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
