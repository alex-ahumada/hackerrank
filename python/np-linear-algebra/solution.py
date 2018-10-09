import numpy

n = int(input())
array = []

for i in range(n):
    tmp = list(map(float, input().split()))
    array.append(tmp)

np_array = numpy.array(array, float)
print(round(numpy.linalg.det(np_array), 2))