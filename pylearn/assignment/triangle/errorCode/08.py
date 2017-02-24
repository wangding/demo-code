#! /user/bin/env python
# _*_  coding: utf-8  _*_
# __author__ = "王顶"
# Email: 408542507@qq.com

"""
用来练习测试的代码，代码中有bug
"""

def triangle(maxLevel):
    level = 0
    while level < maxLevel:
        n = level * 2 + 1  # n 代表* 的个数
        m = 4 - level  # m 代表空格个数
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
        triangle(int(n))

if num.isalpha():
    if num == '':
        triangle(4)
    else:
        print("请输入3到10之前的数字")
