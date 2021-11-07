from rx import create


def create_five_strings(observer, scheduler):
    observer.on_next('1')
    observer.on_next('2')
    observer.on_next('3')
    observer.on_next('4')
    observer.on_next('5')
    observer.on_completed()


source = create(create_five_strings)

source.subscribe(
    on_next=lambda i: print("Recevied {0}".format(i))
)
