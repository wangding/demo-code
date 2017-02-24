#! /user/bin/env python
# _*_  coding: utf-8  _*_
# __author__ = "王顶"
# Email: 408542507@qq.com

"""
终极金字塔
"""

def triangle(maxLevel = 4):
    level = 0
    while level < maxLevel:
        n = level * 2 + 1  # n 代表* 的个数
        m = maxLevel - level  # m 代表空格个数
        print(' ' * m + '*' * n)
        level = level + 1


num = input("输入金字塔的层数（如果不输入，默认为4层）：")
if num.isnumeric():
    n = int(num)
    if n>10:
        print('太高了，没那么多钱！')
    elif n<3:
        print('层数太小，法老住不下！')
    else:
        triangle(n)

if len(num) == 0:
    triangle()

if num.isalpha():
    print("请输入3到10之前的数字")
