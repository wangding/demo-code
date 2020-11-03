#!/usr/bin/env node

const log = console.log;

/* es6 生成器函数实战 */

// 需求：
// 模拟 获取用户数据  获取订单数据  获取商品数据

function getUsers() {
  setTimeout(() => {
    let data = 'user data';
    iterator.next(data);
  }, 1000);
}

function getOrders() {
  setTimeout(() => {
    let data = 'order data';
    iterator.next(data);
  }, 1000);
}

function getGoods() {
  setTimeout(() => {
    let data = 'god data';
    iterator.next(data);
  }, 1000);
}

function * gen() {
  let users = yield getUsers();
  log(users);

  let orders = yield getOrders();
  log(orders);

  let goods = yield getGoods();
  log(goods);
}

let iterator = gen();
iterator.next();
