from rx import of

source = of(1, 2, 3, 4, 5)

source.subscribe(
    on_next=lambda i: print("Recevied {0}".format(i))
)
