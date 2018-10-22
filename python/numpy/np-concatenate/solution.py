import numpy

n, m, p = map(int, input().split())

array1 = []
array2 = []

for i in range(n):
    tmp = list(map(int, input().split()))
    array1.append(tmp)

for i in range(m):
    tmp = list(map(int, input().split()))
    array2.append(tmp)

np_array1 = numpy.array(array1)
np_array2 = numpy.array(array2)

print(numpy.concatenate((np_array1, np_array2), axis=0))
