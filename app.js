//list of country codes and currency names (object)
const list = {
    AED: "AE",
  AFN: "AF", 
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
  };

let f_select=document.querySelector("#from-select");
let t_select=document.querySelector("#to-select");
let button=document.querySelector("#btn");
let result=document.querySelector(".result");
let input=document.querySelector("#en-amt");

for(currcode in list){
    //creating an option in select for every value in list
    let option=document.createElement("option");
    option.innerText=`${list[currcode]} - ${currcode}`;
    option.value=currcode;
    if(list[currcode]=="US"){
        option.selected="selected";
    }
    f_select.append(option);
}
for(currcode in list){
    //creating an option in select for every value in list
    let option=document.createElement("option");
    option.innerText=`${list[currcode]} - ${currcode}`;
    option.value=currcode;
    if(list[currcode]=="IN"){
        option.selected="selected";
    }
    t_select.append(option);
}

f_select.addEventListener("change",(evt)=>{
    let flag=document.querySelector("#from-img");
    flag.src=`https://flagsapi.com/${evt.target.value}/flat/64.png`;
});
t_select.addEventListener("change",(evt)=>{
    let flag=document.querySelector("#to-img");
    flag.src=`https://flagsapi.com/${evt.target.value}/flat/64.png`;
});



button.addEventListener("click",async()=>{
    let enamount=input.value;
    if(enamount == "" || enamount < 1){
        input.value="1";
        enamount=1;
    }
    let from=f_select.value.toLowerCase();
    let to=t_select.value.toLowerCase();
    const URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`;
    let response=await fetch(URL);
    let data=await response.json();
    let rate=data[to];
    console.log(rate);
    let fiamount=enamount*rate;
    display(enamount,fiamount);
});

let display=(enamount,fiamount)=>{
    result.innerText=`${enamount} ${f_select.value} = ${fiamount} ${t_select.value}`;
    result.classList.remove("hide");
};
