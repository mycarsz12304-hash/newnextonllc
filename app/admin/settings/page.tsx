"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Save, Phone, CreditCard, User, Lock } from "lucide-react";

interface Settings {
  whatsapp_number: string;
  payu_merchant_key: string;
  payu_merchant_salt: string;
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings>({
    whatsapp_number: "",
    payu_merchant_key: "",
    payu_merchant_salt: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  // Password change
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  useEffect(() => {
    fetchSettings();
  }, []);

  async function fetchSettings() {
    const supabase = createClient();
    const { data } = await supabase.from("settings").select("*");

    if (data) {
      const settingsMap: Record<string, string> = {};
      data.forEach((item: { key: string; value: string }) => {
        settingsMap[item.key] = item.value;
      });
      setSettings({
        whatsapp_number: settingsMap.whatsapp_number || "",
        payu_merchant_key: settingsMap.payu_merchant_key || "",
        payu_merchant_salt: settingsMap.payu_merchant_salt || "",
      });
    }
    setLoading(false);
  }

  async function saveSettings() {
    setSaving(true);
    setMessage("");

    const supabase = createClient();

    for (const [key, value] of Object.entries(settings)) {
      await supabase
        .from("settings")
        .upsert({ key, value, updated_at: new Date().toISOString() }, { onConflict: "key" });
    }

    setMessage("Settings saved successfully!");
    setSaving(false);
  }

  async function changePassword() {
    if (newPassword !== confirmPassword) {
      setPasswordMessage("Passwords do not match");
      return;
    }

    if (newPassword.length < 6) {
      setPasswordMessage("Password must be at least 6 characters");
      return;
    }

    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      setPasswordMessage(error.message);
    } else {
      setPasswordMessage("Password updated successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account and business settings</p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Contact Settings
              </CardTitle>
              <CardDescription>
                Configure your business contact information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp Number</Label>
                <Input
                  id="whatsapp"
                  value={settings.whatsapp_number}
                  onChange={(e) =>
                    setSettings({ ...settings, whatsapp_number: e.target.value })
                  }
                  placeholder="+1234567890"
                />
                <p className="text-sm text-muted-foreground">
                  This number will be used for WhatsApp chat links
                </p>
              </div>

              {message && (
                <p className="text-sm text-green-600">{message}</p>
              )}

              <Button onClick={saveSettings} disabled={saving}>
                <Save className="h-4 w-4 mr-2" />
                {saving ? "Saving..." : "Save Changes"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                PayU Configuration
              </CardTitle>
              <CardDescription>
                Configure your PayU payment gateway credentials
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="merchant_key">Merchant Key</Label>
                <Input
                  id="merchant_key"
                  value={settings.payu_merchant_key}
                  onChange={(e) =>
                    setSettings({ ...settings, payu_merchant_key: e.target.value })
                  }
                  placeholder="Enter your PayU merchant key"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="merchant_salt">Merchant Salt</Label>
                <Input
                  id="merchant_salt"
                  type="password"
                  value={settings.payu_merchant_salt}
                  onChange={(e) =>
                    setSettings({ ...settings, payu_merchant_salt: e.target.value })
                  }
                  placeholder="Enter your PayU merchant salt"
                />
              </div>

              <div className="p-4 rounded-lg bg-muted">
                <p className="text-sm font-medium mb-2">Test Mode vs Production</p>
                <p className="text-sm text-muted-foreground">
                  For testing, use test credentials from PayU dashboard. 
                  Switch to production credentials when going live.
                </p>
              </div>

              {message && (
                <p className="text-sm text-green-600">{message}</p>
              )}

              <Button onClick={saveSettings} disabled={saving}>
                <Save className="h-4 w-4 mr-2" />
                {saving ? "Saving..." : "Save Changes"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Change Password
              </CardTitle>
              <CardDescription>
                Update your admin account password
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="new_password">New Password</Label>
                <Input
                  id="new_password"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm_password">Confirm Password</Label>
                <Input
                  id="confirm_password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                />
              </div>

              {passwordMessage && (
                <p
                  className={`text-sm ${
                    passwordMessage.includes("success")
                      ? "text-green-600"
                      : "text-destructive"
                  }`}
                >
                  {passwordMessage}
                </p>
              )}

              <Button onClick={changePassword}>
                <Lock className="h-4 w-4 mr-2" />
                Update Password
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
