const RULE_ID = 1001;

chrome.runtime.onMessage.addListener((message, sender) => {
  if (
    message.action !== "ENABLE_BENIM_HOCAM_FIX" ||
    !sender.tab ||
    !sender.tab.id
  ) {
    return;
  }

  const tabId = sender.tab.id;

  chrome.declarativeNetRequest.updateSessionRules({
    removeRuleIds: [RULE_ID],
    addRules: [
      {
        id: RULE_ID,
        priority: 1,
        action: {
          type: "modifyHeaders",
          responseHeaders: [
            {
              header: "Access-Control-Allow-Origin",
              operation: "set",
              value: "https://vvplayer.fernus.net"
            }
          ]
        },
        condition: {
          tabIds: [tabId],
          initiatorDomains: [
            "vvplayer.fernus.net"
          ],
          requestDomains: [
            "benimhocam.frns.in"
          ],
          resourceTypes: [
            "xmlhttprequest"
          ]
        }
      }
    ]
  }).catch(console.error);
});

chrome.tabs.onRemoved.addListener((tabId) => {
  chrome.declarativeNetRequest.updateSessionRules({
    removeRuleIds: [RULE_ID]
  }).catch(console.error);
});