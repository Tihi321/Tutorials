const djeloviKompjutera = {
  monitor: "LG",
  ram: 4,
};

const { hardDisk: { ssd } = { ssd: "Samsung" }, monitor, tipkovnica = "Microsoft" } = djeloviKompjutera;

console.log(ssd);
console.log(tipkovnica);
console.log(monitor);


const firmeZaDjelove = ["LG", "Logitech"];

const [mis, monitor, ssd = "Verbatim"] = firmeZaDjelove;

console.log(monitor);
console.log(mis);
console.log(ssd);
