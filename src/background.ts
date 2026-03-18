const ACCEPT_LANGUAGE = "ja,en-US;q=0.9,en;q=0.8";

const RULE: chrome.declarativeNetRequest.Rule = {
  id: 1,
  priority: 1,
  action: {
    type: "modifyHeaders" as chrome.declarativeNetRequest.RuleActionType,
    requestHeaders: [
      {
        operation: "set" as chrome.declarativeNetRequest.HeaderOperation,
        header: "Accept-Language",
        value: ACCEPT_LANGUAGE,
      },
    ],
  },
  condition: {
    resourceTypes: [
      "main_frame" as chrome.declarativeNetRequest.ResourceType,
      "sub_frame" as chrome.declarativeNetRequest.ResourceType,
      "xmlhttprequest" as chrome.declarativeNetRequest.ResourceType,
      "other" as chrome.declarativeNetRequest.ResourceType,
    ],
  },
};

function applyRule() {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1],
    addRules: [RULE],
  });
}

chrome.runtime.onInstalled.addListener(applyRule);
chrome.runtime.onStartup.addListener(applyRule);
applyRule();
