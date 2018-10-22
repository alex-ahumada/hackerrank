import numpy

n,m = map(int,input().split())
array = []

for i in range(n):
    row = list(map(int,input().split()))
    array.append(row)
np_array = numpy.array(array)

print(numpy.transpose(np_array))
print(np_array.flatten())