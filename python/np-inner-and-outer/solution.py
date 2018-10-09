import numpy

np_array1 = numpy.array(list(map(int,input().split())))
np_array2 = numpy.array(list(map(int,input().split())))

print(numpy.inner(np_array1, np_array2))
print(numpy.outer(np_array1, np_array2))