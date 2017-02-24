#! /user/bin/env python
# _*_  coding: utf-8  _*_
# __author__ = "王顶"
# Email: 408542507@qq.com

"""
循环的第二种实现方式，不用切片，代码更简洁
"""

level = 0
while level < 4:
    n = level * 2 + 1  # n 代表* 的个数
    m = 4 - level  # m 代表空格个数
    print(' ' * m + '*' * n)
    level = level + 1
