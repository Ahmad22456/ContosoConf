const tracks = [
  {
    id: 1,
    name: "Keynote",
    speaker: "Dr. Jane Smith",
    time: "9:00 AM - 10:00 AM",
    room: "Main Hall",
  },
  {
    id: 2,
    name: "Web Development",
    speaker: "Alice Johnson",
    time: "11:00 AM - 12:00 PM",
    room: "Room A",
  },
  {
    id: 3,
    name: "Data Science",
    speaker: "Charlie Green",
    time: "11:00 AM - 12:00 PM",
    room: "Room B",
  },
  {
    id: 4,
    name: "Cloud Computing",
    speaker: "Eva Black",
    time: "11:00 AM - 12:00 PM",
    room: "Room C",
  },
];

$(document).ready(function () {
  $(".track1").append(`<p class="name">${tracks[0].name}</p>`);
  $(".track1").append(`<p class="speaker">${tracks[0].speaker}</p>`);
  $(".track1").append(`<p class="time">${tracks[0].time}</p>`);
  $(".track1").append(`<p class="room">${tracks[0].room}</p>`);
  $(".track2").append(`<p class="name">${tracks[1].name}</p>`);
  $(".track2").append(`<p class="speaker">${tracks[1].speaker}</p>`);
  $(".track2").append(`<p class="time">${tracks[1].time}</p>`);
  $(".track2").append(`<p class="room">${tracks[1].room}</p>`);
  $(".track3").append(`<p class="name">${tracks[2].name}</p>`);
  $(".track3").append(`<p class="speaker">${tracks[2].speaker}</p>`);
  $(".track3").append(`<p class="time">${tracks[2].time}</p>`);
  $(".track3").append(`<p class="room">${tracks[2].room}</p>`);
  $(".track4").append(`<p class="name">${tracks[3].name}</p>`);
  $(".track4").append(`<p class="speaker">${tracks[3].speaker}</p>`);
  $(".track4").append(`<p class="time">${tracks[3].time}</p>`);
  $(".track4").append(`<p class="room">${tracks[3].room}</p>`);
});
