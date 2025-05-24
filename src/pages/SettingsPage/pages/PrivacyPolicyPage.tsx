import React, { useState, type JSX } from 'react';
import { Shield, Smartphone, Key, Bell, Lock, Mail, MessageSquare, ShoppingCart, CheckCircle } from 'lucide-react';

type SecuritySetting = {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
  isToggle: boolean;
  enabled?: boolean;
  status?: string;
  statusColor?: string;
  hasAction?: boolean;
  actionText?: string;
};

const PrivacyPolicySettings: React.FC = () => {
  // State for security settings
  const [securitySettings, setSecuritySettings] = useState<SecuritySetting[]>([
    {
      id: 'two-factor',
      icon: <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />,
      title: 'Two-Factor Authentication',
      description: 'Add an extra layer of security to your account by requiring a verification code from your phone in addition to your password.',
      isToggle: true,
      enabled: false,
      status: 'Disabled',
      statusColor: 'text-red-600'
    },
    {
      id: 'secondary-verification',
      icon: <Shield className="w-5 h-5 md:w-6 md:h-6 text-green-600" />,
      title: 'Secondary Verification',
      description: 'Require additional identity verification for sensitive account changes, such as password resets or payment method updates.',
      isToggle: true,
      enabled: true,
      status: 'Active',
      statusColor: 'text-green-600'
    },
    {
      id: 'backup-codes',
      icon: <Key className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />,
      title: 'Backup Recovery Codes',
      description: 'Generate and securely store backup codes that can be used to access your account if you lose access to your primary authentication method.',
      isToggle: false,
      hasAction: true,
      actionText: 'Generate Codes'
    }
  ]);

  // State for notification settings
  const [notificationSettings, setNotificationSettings] = useState([
    {
      id: 'desktop',
      icon: <Bell className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />,
      title: 'Desktop Notifications',
      description: 'Receive push notifications on your desktop browser',
      enabled: true
    },
    {
      id: 'email',
      icon: <Mail className="w-4 h-4 md:w-5 md:h-5 text-green-500" />,
      title: 'Email Notifications',
      description: 'Get important updates via email',
      enabled: true
    },
    {
      id: 'chat',
      icon: <MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-purple-500" />,
      title: 'Chat Notifications',
      description: 'Receive notifications for new messages and chat activity',
      enabled: false
    },
    {
      id: 'purchase',
      icon: <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />,
      title: 'Purchase Notifications',
      description: 'Get notified about order confirmations and shipping updates',
      enabled: true
    }
  ]);

  // Toggle security settings
  const toggleSecuritySetting = (id: string) => {
    setSecuritySettings(prev => prev.map(setting => {
      if (setting.id === id && setting.isToggle) {
        const newEnabled = !setting.enabled;
        return {
          ...setting,
          enabled: newEnabled,
          status: newEnabled ? 'Active' : 'Disabled',
          statusColor: newEnabled ? 'text-green-600' : 'text-red-600'
        };
      }
      return setting;
    }));
  };

  // Toggle notification settings
  const toggleNotificationSetting = (id: string) => {
    setNotificationSettings(prev => prev.map(setting => {
      if (setting.id === id) {
        return {
          ...setting,
          enabled: !setting.enabled
        };
      }
      return setting;
    }));
  };

  // Handle action buttons
  const [generateCode,setGenerateCode] = useState("Generate Codes");
  const handleGenerateCodes = () => {
    setGenerateCode("Resend");
  };


  const [changes,setChanges] = useState("Save Changes");
  const handleSaveChanges = () => {
    setChanges("Changes Saved");
  };

  const handleResetToDefault = () => {
    // Reset to default values
    setSecuritySettings([
      {
        id: 'two-factor',
        icon: <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />,
        title: 'Two-Factor Authentication',
        description: 'Add an extra layer of security to your account by requiring a verification code from your phone in addition to your password.',
        isToggle: true,
        enabled: false,
        status: 'Disabled',
        statusColor: 'text-red-600'
      },
      {
        id: 'secondary-verification',
        icon: <Shield className="w-5 h-5 md:w-6 md:h-6 text-green-600" />,
        title: 'Secondary Verification',
        description: 'Require additional identity verification for sensitive account changes, such as password resets or payment method updates.',
        isToggle: true,
        enabled: false,
        status: 'Disabled',
        statusColor: 'text-red-600'
      },
      {
        id: 'backup-codes',
        icon: <Key className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />,
        title: 'Backup Recovery Codes',
        description: 'Generate and securely store backup codes that can be used to access your account if you lose access to your primary authentication method.',
        isToggle: false,
        hasAction: true,
      }
    ]);

    setNotificationSettings([
      {
        id: 'desktop',
        icon: <Bell className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />,
        title: 'Desktop Notifications',
        description: 'Receive push notifications on your desktop browser',
        enabled: false
      },
      {
        id: 'email',
        icon: <Mail className="w-4 h-4 md:w-5 md:h-5 text-green-500" />,
        title: 'Email Notifications',
        description: 'Get important updates via email',
        enabled: false
      },
      {
        id: 'chat',
        icon: <MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-purple-500" />,
        title: 'Chat Notifications',
        description: 'Receive notifications for new messages and chat activity',
        enabled: false
      },
      {
        id: 'purchase',
        icon: <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />,
        title: 'Purchase Notifications',
        description: 'Get notified about order confirmations and shipping updates',
        enabled: false
      }
    ]);

    alert('Settings reset to default values!');
  };

  return (
    <div className="mx-auto p-3 md:p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="border-b border-gray-200 p-4 md:p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Lock className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">Security & Privacy</h1>
              <p className="text-sm md:text-base text-gray-600 mt-1">Manage your account security and privacy settings</p>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6 flex items-center">
            <Shield className="w-4 h-4 md:w-5 md:h-5 mr-2 text-blue-600" />
            Security Settings
          </h2>

          <div className="space-y-4 md:space-y-6">
            {securitySettings.map((setting) => (
              <div key={setting.id} className="bg-gray-50 rounded-lg p-3 md:p-4 hover:bg-gray-100 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-3 sm:space-y-0">
                  <div className="flex items-start space-x-3 md:space-x-4 flex-1">
                    <div className="p-1.5 md:p-2 bg-white rounded-lg shadow-sm flex-shrink-0">
                      {setting.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-3 mb-2">
                        <h3 className="text-base md:text-lg font-semibold text-gray-900">{setting.title}</h3>
                        {setting.status && (
                          <span className={`text-xs md:text-sm font-medium ${setting.statusColor}`}>
                            {setting.status}
                          </span>
                        )}
                      </div>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">{setting.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-end space-x-3 flex-shrink-0">
                    {setting.isToggle && (
                      <button
                        onClick={() => toggleSecuritySetting(setting.id)}
                        className={`relative inline-flex h-5 w-9 md:h-6 md:w-11 items-center rounded-full transition-colors ${
                          setting.enabled ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-3 w-3 md:h-4 md:w-4 transform rounded-full bg-white transition-transform ${
                            setting.enabled ? 'translate-x-5 md:translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    )}

                    {setting.hasAction && (
                      <button 
                        onClick={handleGenerateCodes}
                        className="px-3 py-1.5 md:px-4 md:py-2 bg-[#9b111e] text-white rounded-md hover:bg-[#7a0e17] transition-colors text-xs md:text-sm font-medium whitespace-nowrap"
                      >
                        {generateCode}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notification Settings */}
        <div className="border-t border-gray-200 p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6 flex items-center">
            <Bell className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-600" />
            Notification Preferences
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
            {notificationSettings.map((setting) => (
              <div key={setting.id} className="bg-gray-50 rounded-lg p-3 md:p-4 hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 flex-1 min-w-0">
                    <div className="p-1.5 md:p-2 bg-white rounded-lg shadow-sm flex-shrink-0">
                      {setting.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm md:text-base font-semibold text-gray-900">{setting.title}</h3>
                      <p className="text-xs md:text-sm text-gray-600 truncate">{setting.description}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleNotificationSetting(setting.id)}
                    className={`relative inline-flex h-5 w-9 md:h-6 md:w-11 items-center rounded-full transition-colors flex-shrink-0 ml-3 ${
                      setting.enabled ? 'bg-green-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-3 w-3 md:h-4 md:w-4 transform rounded-full bg-white transition-transform ${
                        setting.enabled ? 'translate-x-5 md:translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="border-t border-gray-200 p-4 md:p-6">
          <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
            <button 
              onClick={handleResetToDefault}
              className="w-full sm:w-auto px-4 md:px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm md:text-base"
            >
              Reset to Default
            </button>
            <button 
              onClick={handleSaveChanges}
              className="w-full sm:w-auto px-4 md:px-6 py-2 bg-[#9b111e] text-white rounded-md hover:bg-[#7a0e17] transition-colors flex items-center justify-center space-x-2 text-sm md:text-base"
            >
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
              <span>{changes}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicySettings;