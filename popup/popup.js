$(function () {

  // Event listeners for each button

  $('#banner-painter').click(function (e) {
    color = document.getElementById("colorBar").value;
    chrome.tabs.executeScript(null, {code: 'window.painter.paint(\'banner\',\'' + color + '\');'});
  });

  $('#background-painter').click(function (e) {
    color = document.getElementById("colorBar").value;
    chrome.tabs.executeScript(null, {code: 'window.painter.paint(\'background\',\'' + color + '\');'});
  });

  $('#border-painter').click(function (e) {
    color = document.getElementById("colorBar").value;
    chrome.tabs.executeScript(null, {code: 'window.painter.paint(\'border\',\'' + color + '\');'});
  });
});
