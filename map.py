from rx import of, operators as op

source = of("abcde", "eff", "fffe", "fffe", 'asfa')

composed = source.pipe(
    op.map(lambda s: len(s)),
)

composed.subscribe(
    on_next=lambda i: print("Recevied {0}".format(i))
)
