import React, { useState } from "react";
import "./Tabs.scss"


interface Tab {
  label: string;
  content: React.ReactNode;
  disabled: Boolean;
}

interface TabsProps {
  tabContent: Tab[];
  currentIndex?: number;
}

const Tabs: React.FC<TabsProps> = ({ tabContent, currentIndex = 0 }) => {
  const [tabs] = useState(tabContent);
  const [currentTab, setCurrentTab] = useState(currentIndex);

  const generateTabsHeading = () => {
    return (
      <div className="tabs-heading">
        {tabs.length > 0 &&
          tabs.map((tab, index) => {
            return (
              <button key={index} onClick={() => setCurrentTab(index)}>
                {tab.label}
              </button>
            );
          })}
      </div>
    );
  };

  const generateTabsContent = () => {
    return (
      <div className="tabs-content">
        {tabs.length > 0 &&
          tabs.map((tab, index) => {
            return (
              <p key={index} className={`${index === currentTab ? "active" : "inactive"}`}>
                {tab.content}
              </p>
            );
          })}
      </div>
    );
  };

  return (
    <>
      {generateTabsHeading()}
      {generateTabsContent()}
    </>
  );
};

export default Tabs;
