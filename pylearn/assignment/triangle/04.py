#! /user/bin/env python
# _*_  coding: utf-8  _*_
# __author__ = "王顶"
# Email: 408542507@qq.com

"""
循环切片实现
需求总是改变，一会是4层金字塔，一会儿是5层金子塔
到底要几层，改一下 while 循环的条件变量就行了
"""
level = 0
line = ''

stars  = '*******************************************'
spaces = '                                           '

while level < 4:
    n = level * 2 + 1       # n 代表* 的个数
    m = 4 - level           # m 代表空格个数

    line = spaces[:m] + stars[:n]
    print(line)

    level = level + 1