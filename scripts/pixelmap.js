$('img[usemap]').maphilight()
if (typeof web3 == 'undefined') {
  console.log('hi');
}
web3.eth.defaultAccount=web3.eth.accounts[0]
for (var x = 0, x; x < 81; x++) {
    for (var y = 0, y; y < 49; y++) {
        if (document.getElementById(x + "x" + y).alt == web3.eth.defaultAccount) {
            document.getElementById(x + "x" + y).href = "#editTile";
            $('#' + x + "x" + y).attr('data-target','#edit-tile');
        }
    }
}
