const bs = chrome || browser;
bs.tabs.create({ url: bs.runtime.getURL("mypage/index.html") }, (tab) =>
  console.log(tab)
);
