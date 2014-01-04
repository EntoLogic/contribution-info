EntoLogic UAST specification
============================

This file describes the make up of a JSON Universal Abstract Syntax Tree Generator for EntoLogic. The spec is not JSON itself but the structure of the nodes nested within each other.

As normal ASTs are, the UAST is made up of nodes. Each node can contain multiple attributes about the part of the program it is representing and also nest other nodes inside of it. Attributes with a question mark mean that their presence is optional. The question marks should not be included in the actual output.

Every JSON object node shown below has another property not shown called ```"node"```. It should hold the node type it comes from. E.g. A function declaration should look like:
 ```
{"node": "FuncDecl", "name": "foo" ... }
 ```

Each node (also not shown) should also include a ```“loc”``` object containing the node’s line and column of origin and finish. Both start and end are optional, but it is preferable that you get your generator to insert the start location so we can point to the users source code where the node occurs. ```“loc”: {"start": [<line>, <col>], "end": [<line>, <col>]}```. The line and column of the first line of code should each be 0. You may need to offset  the location the parse gives you for this.

Look in the examples folder of this repo for some actual UAST outputs.


Definition
----------
```
JSON Base = {Meta, Program, Warnings: [String], Errors: [String]}
```
```
Meta = {  } // No use yet but may be in the future.
```
```
Program = [Function | Statement | ClassDecl]
```
```
UnknownNode = {} // Use this for nodes that are not yet supported. It still takes a "node" and "loc".
```

Declarations

```
FuncDecl = {name: string, returnType?: Type, modifiers?: [modifier], genericParams?: [GenericParamDecl], arguments: [string] | [TypedArg], body?: [Statement]}

ClassDecl = {name: string, modifiers?: [string], genericParams?: [GenericParam], body: [FunctionDecl | VarDecl] }

VarDecl = {name: string, type?: Type, modifiers?: [modifier], initalizer?: Expression}

OneVarDecl = {name: string, initializer?: Expression}

MultiVarDecl = {modifiers?: [modifier], type?: Type, decls = [OneVarDecl]}
```

Statement Kinds

```
Statement = Expression | VarDecl | IfStm | ForStm | WhileStm | DoStm | SwitchStm | ReturnStm
```

Expression Kinds

```
Expression = BinaryExpr | PrefixExpr | PostfixExpr | TernaryOp | Assignment | VarRef | FunctionCall | MethodCall | Literal | InstanceConstruction
```

Creating an instance (new)

```
InstanceConstruction = {class: Type, args: [Expression]}
```

Variable access

```
VarRef = FieldAccess | VarAccess

FieldAccess = {obj: Expression, field: string}

VarAccess = string | {var: Expression}

MethodCall = {obj: Expression, call: FunctionCall}

FunctionCall = {name: string, genericParams: [GenericParam], args: [Expression]}
```

Literals

```
Literal = IntLit | FloatLit | DoubleLit | LongLit | StringLit | CharLit
IntLit = {value: string}
FloatLit = {value:string}
DoubleLit = {value:string}
LongLit = {value:string}
StringLit = {value:string}
CharLit = {value:string}
```

Expressions

```
BinaryExpr = {op: BinaryOp, left: Expression, right: Expression}

PrefixExpr = {op: PrefixOp, operand: Expression}

PostfixExpr = {op: PostfixOp, operand: Expression}
```

Operators

```
BinaryOp = +:add | -:subtract | *:multiply | /:divide | %:modulo | &&:logicalAnd | ‘||’:logicalOr | &:bitAnd | ‘|’:bitOr | ^:xor | >>:rshift | <<:lshift | >>>:rushift 
```
```
PrefixOp = !:not | ~:bitNot | ++: increment | --:decrement

PostfixOp = ++:increment | --:decrement

TernaryOp = {condition: Expression, first: Expression, second: Expression}
```

Comparison

```
ComparisonExpr = {comp : Comparison, left: Expression, right: Expression}

Comparison = >:greaterThan | <:lessThan | >=:greaterOrEqual | <=:lessOrEqual | ==:equalTo | !=:notEqual 
```

Assignment

```
Assignment = {variable: VarRef, value: Expression}

OpAssignment = {op: BinOperator, variable: VarRef, value: Expression}
```

Control Flow

```
IfStm = {cond: Expression, body: [Statement], else?: IfStm}

ForStm = {decls: MultiVarDecl, condition: Expression, modification: Expression, body: [Statement]}

WhileStm = {cond: Expression, body: [Statement]}

DoStm = {cond: Expression, body: [Statement]}

SwitchStm = {on: Expression, cases: [{case: Expression, body: [Statement]}], default:? [Statement]}
```

Types

```
Type = BuiltinType | SimpleType | GenericType | ArrayType

BuiltinType = {name: string}
SimpleType = {name: string}
ArrayType = {elementType : Type}
GenericType = {name: string, params: [GenericParam]}

GenericParam = PlaceHolder
GenericParamDecl = PlaceHolder
```