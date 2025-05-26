import React, { useState } from 'react';
import AccountSettingsPage from './pages/AccountSettingsPage';
import PrivacyPolicySettings from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsContionsPage';
import AboutUsPage from './pages/AboutUsPage';

const SettingsPage: React.FC = () => {
  const [tab, setTab] = useState<string>('Account Settings');

  const handleRenderComponent = (tabText: string) => {
    setTab(tabText);
  };

  return (
    <div className="p-6">
      <div className="flex flex-wrap align-center justify-center gap-4 mb-6">
       <button
  onClick={() => handleRenderComponent('Account Settings')}
  className={`font-semibold py-2 px-4 ml-4 border rounded transition-all duration-200
    ${tab === 'Account Settings'
      ? 'bg-gradient-to-br from-[#700808] via-[#a61c1c] to-[#d23c3c] text-white border-[#9b111e]'
      : 'text-[#9b111e] border-[#9b111e] bg-transparent hover:bg-gradient-to-br hover:from-[#700808] hover:via-[#a61c1c] hover:to-[#d23c3c] hover:text-white focus:bg-[#9b111e] focus:text-white focus:border-[#9b111e]'
    }`}
>
  Account Settings
</button>

       <button
  onClick={() => handleRenderComponent('About us')}
  className={`font-semibold py-2 px-4 ml-4 border rounded transition-all duration-200
    ${tab === 'About us'
      ? 'bg-gradient-to-br from-[#700808] via-[#a61c1c] to-[#d23c3c] text-white border-[#9b111e]'
      : 'text-[#9b111e] border-[#9b111e] bg-transparent hover:bg-gradient-to-br hover:from-[#700808] hover:via-[#a61c1c] hover:to-[#d23c3c] hover:text-white focus:bg-[#9b111e] focus:text-white focus:border-[#9b111e]'
    }`}
>
  About Us
</button>
<button
  onClick={() => handleRenderComponent('Privacy Policy')}
  className={`font-semibold py-2 px-4 ml-4 border rounded transition-all duration-200
    ${tab === 'Privacy Policy'
      ? 'bg-gradient-to-br from-[#700808] via-[#a61c1c] to-[#d23c3c] text-white border-[#9b111e]'
      : 'text-[#9b111e] border-[#9b111e] bg-transparent hover:bg-gradient-to-br hover:from-[#700808] hover:via-[#a61c1c] hover:to-[#d23c3c] hover:text-white focus:bg-[#9b111e] focus:text-white focus:border-[#9b111e]'
    }`}
>
  Privacy Policy
</button>

      <button
  onClick={() => handleRenderComponent('Terms & Conditions')}
  className={`font-semibold py-2 px-4 ml-4 border rounded transition-all duration-200
    ${tab === 'Terms & Conditions'
      ? 'bg-gradient-to-br from-[#700808] via-[#a61c1c] to-[#d23c3c] text-white border-[#9b111e]'
      : 'text-[#9b111e] border-[#9b111e] bg-transparent hover:bg-gradient-to-br hover:from-[#700808] hover:via-[#a61c1c] hover:to-[#d23c3c] hover:text-white focus:bg-[#9b111e] focus:text-white focus:border-[#9b111e]'
    }`}
>
  Terms & Conditions
</button>
      </div>

      <div>
        {tab === 'Account Settings' && <AccountSettingsPage />}
        {tab === 'Privacy Policy' && <PrivacyPolicySettings />}
        {tab === 'Terms & Conditions' && <TermsConditionsPage />}
        {tab === 'About us' && <AboutUsPage />}
      </div>
    </div>
  );
};

export default SettingsPage;
