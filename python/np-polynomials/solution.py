import numpy

p = numpy.array(list(map(float,input().split())),float)
x = float(input())

print(numpy.polyval(p,x))