import React from "react";
import {
  Shield,
  Smartphone,
  Key,
  Bell,
  Lock,
  Mail,
  MessageSquare,
  ShoppingCart,
  CheckCircle,
} from "lucide-react";

const PrivacyPolicySettings: React.FC = () => {
  const securitySettings = [
    {
      id: "two-factor",
      icon: <Smartphone className="w-6 h-6 text-blue-600" />,
      title: "Two-Factor Authentication",
      description:
        "Add an extra layer of security to your account by requiring a verification code from your phone in addition to your password.",
      isToggle: true,
      enabled: false,
      status: "Disabled",
      statusColor: "text-red-600",
    },
    {
      id: "secondary-verification",
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Secondary Verification",
      description:
        "Require additional identity verification for sensitive account changes, such as password resets or payment method updates.",
      isToggle: true,
      enabled: true,
      status: "Active",
      statusColor: "text-green-600",
    },
    {
      id: "backup-codes",
      icon: <Key className="w-6 h-6 text-purple-600" />,
      title: "Backup Recovery Codes",
      description:
        "Generate and securely store backup codes that can be used to access your account if you lose access to your primary authentication method.",
      isToggle: false,
      hasAction: true,
      actionText: "Generate Codes",
    },
  ];

  const notificationSettings = [
    {
      id: "desktop",
      icon: <Bell className="w-5 h-5 text-blue-500" />,
      title: "Desktop Notifications",
      description: "Receive push notifications on your desktop browser",
      enabled: true,
    },
    {
      id: "email",
      icon: <Mail className="w-5 h-5 text-green-500" />,
      title: "Email Notifications",
      description: "Get important updates via email",
      enabled: true,
    },
    {
      id: "chat",
      icon: <MessageSquare className="w-5 h-5 text-purple-500" />,
      title: "Chat Notifications",
      description: "Receive notifications for new messages and chat activity",
      enabled: false,
    },
    {
      id: "purchase",
      icon: <ShoppingCart className="w-5 h-5 text-orange-500" />,
      title: "Purchase Notifications",
      description:
        "Get notified about order confirmations and shipping updates",
      enabled: true,
    },
  ];

  return (
    <div className=" p-6 bg-gray-50 ">
      <div className="bg-white rounded-lg">
        {/* Header */}
        <div className="border-b border-gray-200 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Lock className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Security & Privacy
              </h1>
              <p className="text-gray-600 mt-1">
                Manage your account security and privacy settings
              </p>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Shield className="w-5 h-5 mr-2 text-blue-600" />
            Security Settings
          </h2>

          <div className="space-y-6">
            {securitySettings.map((setting) => (
              <div
                key={setting.id}
                className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div
                      className="p-2 bg-white rounded-lg 
                    "
                    >
                      {setting.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {setting.title}
                        </h3>
                        {setting.status && (
                          <span
                            className={`text-sm font-medium ${setting.statusColor}`}
                          >
                            {setting.status}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {setting.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    {setting.isToggle && (
                      <button
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          setting.enabled ? "bg-blue-600" : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            setting.enabled ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                    )}

                    {setting.hasAction && (
                      <button className="m-6 px-2 py-1 bg-[#9b111e] text-white rounded-md transition-colors text-sm font-medium">
                        {setting.actionText}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notification Settings */}
        <div className=" mx-auto p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Bell className="w-5 h-5 mr-2 text-green-600" />
            Notification Preferences
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {notificationSettings.map((setting) => (
              <div
                key={setting.id}
                className=" rounded-lg p-4 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white rounded-lg ">
                      {setting.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {setting.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {setting.description}
                      </p>
                    </div>
                  </div>

                  <button
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      setting.enabled ? "bg-green-600" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        setting.enabled ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="border-t border-gray-200 p-6">
          <div className="flex justify-end space-x-3">
            <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
              Reset to Default
            </button>
            <button className="px-6 py-2 bg-[#9b111e] text-white rounded-md hover:bg-[#9b111e] transition-colors flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicySettings;
