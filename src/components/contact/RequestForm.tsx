"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const TABS = ["Demo", "More Information", "White Paper"] as const;
type Tab = (typeof TABS)[number];

export default function RequestForm() {
  const [activeTab, setActiveTab] = useState<Tab>("Demo");

  return (
    <div className="bg-beige flex flex-col gap-6 p-6">
      {/* Heading + Tabs */}
      <div className="flex flex-col gap-5">
        <h2 className="text-h3 text-primary-80 tracking-[-0.8px] max-md:text-[28px] max-md:leading-[1.25]">
          Submit Request For
        </h2>

        {/* Tab bar */}
        <div className="flex gap-3 flex-wrap">
          {TABS.map((tab) => {
            const isActive = tab === activeTab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 h-[44px] px-5 text-body-1 leading-[1.4] transition-colors ${
                  isActive
                    ? "bg-primary-80 text-white"
                    : "border border-gray-40 text-primary-80"
                }`}
              >
                {isActive && (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M7.5 13.475L4.025 10L2.85 11.175L7.5 15.825L17.5 5.825L16.325 4.65L7.5 13.475Z"
                      fill="white"
                    />
                  </svg>
                )}
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Form fields */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-5"
      >
        {/* Agency/Bureau Name */}
        <div className="flex flex-col gap-3">
          <label className="text-body-1 leading-[1.4] text-gray-100">
            Agency/Bureau Name
          </label>
          <input
            type="text"
            placeholder="Agency/Bureau Name"
            className="h-[52px] border border-gray-40 px-4 py-1 text-body-1 leading-[1.4] text-gray-100 placeholder:text-gray-60 focus:outline-none focus:ring-2 focus:ring-primary-80"
          />
        </div>

        {/* Your Full Name and Title */}
        <div className="flex flex-col gap-3">
          <label className="text-body-1 leading-[1.4] text-gray-100">
            Your Full Name and Title
          </label>
          <input
            type="text"
            placeholder="Your Full Name and Title"
            className="h-[52px] border border-gray-40 px-4 py-1 text-body-1 leading-[1.4] text-gray-100 placeholder:text-gray-60 focus:outline-none focus:ring-2 focus:ring-primary-80"
          />
        </div>

        {/* Your Email Address */}
        <div className="flex flex-col gap-3">
          <label className="text-body-1 leading-[1.4] text-gray-100">
            Your Email Address
          </label>
          <input
            type="email"
            placeholder="Your Email Address"
            className="h-[52px] border border-gray-40 px-4 py-1 text-body-1 leading-[1.4] text-gray-100 placeholder:text-gray-60 focus:outline-none focus:ring-2 focus:ring-primary-80"
          />
        </div>

        {/* Any Comments or Questions? */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 text-body-1 leading-[1.4]">
            <span className="text-gray-100">
              Any Comments or Questions?
            </span>
            <span className="text-gray-60">(Optional)</span>
          </div>
          <textarea
            placeholder="Any Comments or Questions?"
            className="h-[120px] border border-gray-40 px-4 py-4 text-body-1 leading-[1.4] text-gray-100 placeholder:text-gray-60 resize-none focus:outline-none focus:ring-2 focus:ring-primary-80"
          />
        </div>

        {/* Submit Button */}
        <Button
          onClick={() => {}}
          className="w-full justify-between rounded-none h-[56px]"
        >
          Submit Request
        </Button>
      </form>
    </div>
  );
}
