import Swal from "sweetalert2";

export const DELETE_ALERT = () => {
  Swal.fire("Tugas dihapus!", "Tugas telah dihapus dari daftar!", "info");
};

export const COMPLETE_ALERT = (todo) => {
  todo.isComplete
    ? Swal.fire(
        "Tugas dikembalikan!",
        "Tugas dikembalikan ke daftar tugas, segara selesaikan tugasmu!",
        "info"
      )
    : Swal.fire("Selesai!", "Selamat! tugasmu telah selesai!", "success");
};

export const YESTERDAY = "YESTERDAY";
export const TODAY = "TODAY";
export const TOMORROW = "TOMORROW";
export const THREE_NEXT_DAY = "THREE_NEXT_DAY";
export const NEXT_WEEK = "NEXT_WEEK";
export const SOON = "SOON";
export const COMPLETE = "COMPLETE";
export const DAY = [
  "minggu",
  "senin",
  "selasa",
  "rabu",
  "kamis",
  "jumat",
  "sabtu",
];
export const MONTH = [
  "januari",
  "februari",
  "maret",
  "april",
  "mei",
  "juni",
  "juli",
  "agustus",
  "september",
  "oktober",
  "november",
  "desember",
];
