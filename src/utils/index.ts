import moment from "moment";

export const formatDate = (date: string) => {
  return moment(new Date(date)).format("L");
};

export const conventMoney = (money: string) => {
  return parseInt(money).toLocaleString("en");
};
