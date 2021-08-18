# Design Patterns In JavaScript
A pattern is a reusable solution that can be applied to commonly occurring problems in software design. 

# Benefits of using patterns: 

1. Patterns are proven solutions.
2. They are reusable.
3. They help express large solutions elegantly.

**Proto-patterns:** Patterns that are not yet been known to pass the "pattern"-ity tests. these are usually patterns developed by someone for a particular problem and is worthy of sharing with community but has not yet been vetted usually because of its young age. 

**Anti-patterns:** A bad design that is worthy of documenting. Some of anti-patterns examples in JavaScript are; polluting the global namespace by defining a large number of variables in global context or passing strings rather than functions to `setTimeout()` as this triggers the use of `eval()` internally.

# Categories of design patterns:
The 23 Gang of Four (GoF) patterns are generally considered the foundation for all other patterns. They are categorized in three groups: Creational, Structural, and Behavioral.

## Creational Design Patterns
Focus on handling object creation mechanisms where objects are created in a manner suitable for the situation we are working in.
check out codes for these Patterns.

[Factory](https://github.com/omamazainab/Design-Patterns/blob/master/Creational/Factory.js)

[Singleton](https://github.com/omamazainab/Design-Patterns/blob/master/Creational/Singleton.js)

## Behavioural Design Patterns
Focus on improving or streamlining the communication between disparate objects in a system.

[Observer](https://github.com/omamazainab/Design-Patterns/blob/master/Behavioural/Observer.js)

[Strategy](https://github.com/omamazainab/Design-Patterns/blob/master/Behavioural/Strategy.js)

## Structural Design Patterns
 Concerned with object composition and typically identify simple ways to realize relationships between different objects. They help ensure that if one part of the system changes, the whole system does not have to change.
 
[Adapter](https://github.com/omamazainab/Design-Patterns/blob/master/Structural/Adapter.js)

[Decorator](https://github.com/omamazainab/Design-Patterns/blob/master/Structural/Decorator.js)

Learn more about design patterns from my blog -> [Design patterns in JavaScript](https://omamazainab.hashnode.dev/series/design-patterns-using-js)


