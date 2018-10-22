import numpy

array = list(map(int,input().split()))
np_array = numpy.array(array)
print(numpy.reshape(np_array,(3,3)))