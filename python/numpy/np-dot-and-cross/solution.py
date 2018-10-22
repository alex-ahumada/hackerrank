import numpy

n = int(input())
array1 = []
array2 = []

for i in range(n):
    tmp = list(map(int,input().split()))
    array1.append(tmp)
np_array1 = numpy.array(array1)

for i in range(n):
    tmp = list(map(int,input().split()))
    array2.append(tmp)
np_array2 = numpy.array(array2)

print(numpy.dot(np_array1, np_array2))