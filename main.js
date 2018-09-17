$(document).ready(function() {
  $("#pic").attr("src", function choosePic() {
    var picNames = ["emily1", "emily2", "emily3", "emily4", "rosie", "honor", "jess", "sophie", "ellie", "callum", "becca"];
    return ("pics/" + picNames[Math.floor(Math.random() * picNames.length)] + ".png")
  });
})
