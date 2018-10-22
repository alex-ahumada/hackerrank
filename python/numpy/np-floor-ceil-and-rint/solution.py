import numpy

# fix output format mismatch
numpy.set_printoptions(legacy='1.13')

np_array = numpy.array(list(map(float,input().split())),float)

print(numpy.floor(np_array))
print(numpy.ceil(np_array))
print(numpy.rint(np_array))