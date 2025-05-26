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
       <button onClick={() => handleRenderComponent('Account Settings')}
             className="text-[#9b111e] font-semibold py-2 px-4 ml-4 border rounded 
             border-[#9b111e] bg-transparent
             hover:bg-gradient-to-br hover:from-[#700808] hover:via-[#a61c1c] hover:to-[#d23c3c]
             hover:text-white 
             focus:bg-[#9b111e] focus:text-white focus:border-[#9b111e]
             active:bg-[#700808] active:text-white transition-all duration-200"
        >
           Account Settings
        </button>

        <button onClick={() => handleRenderComponent('About us')}
          className="text-[#9b111e] font-semibold py-2 px-4 ml-4 border rounded 
             border-[#9b111e] bg-transparent
             hover:bg-gradient-to-br hover:from-[#700808] hover:via-[#a61c1c] hover:to-[#d23c3c]
             hover:text-white 
             focus:bg-[#9b111e] focus:text-white focus:border-[#9b111e]
             active:bg-[#700808] active:text-white transition-all duration-200"
        >
          About us
        </button>

        <button onClick={() => handleRenderComponent('Privacy Policy')}
          className="text-[#9b111e] font-semibold py-2 px-4 ml-4 border rounded 
             border-[#9b111e] bg-transparent
             hover:bg-gradient-to-br hover:from-[#700808] hover:via-[#a61c1c] hover:to-[#d23c3c]
             hover:text-white 
             focus:bg-[#9b111e] focus:text-white focus:border-[#9b111e]
             active:bg-[#700808] active:text-white transition-all duration-200"
        >
          Privacy Policy
        </button>

        <button onClick={() => handleRenderComponent('Terms & Conditions')}
          className="text-[#9b111e] font-semibold py-2 px-4 ml-4 border rounded 
             border-[#9b111e] bg-transparent
             hover:bg-gradient-to-br hover:from-[#700808] hover:via-[#a61c1c] hover:to-[#d23c3c]
             hover:text-white 
             focus:bg-[#9b111e] focus:text-white focus:border-[#9b111e]
             active:bg-[#700808] active:text-white transition-all duration-200] "
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
