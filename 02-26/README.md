# Friday, February 26, 2021

This time we'll talk through Virtual Environments (venv) in Python

## Setup

* Install [Virtual Environment](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/#installing-virtualenv)

```bash
python3 -m pip install --user virtualenv
```

## Why use virtual environments?

- Gives you a lightweight way to generate custom environments with specific packages
- Easily manage which version of Python you're using
- Allows you to utilize known environments through other scripting
- sectioned off from your system python

## How to create venv

Generate your venv with this command

```bash
# python<version> -m venv <env name>
python3 -m venv newEnv
```

## Using the venv?

### first activate your venv
```bash
# source <env name>/bin/activate
source newEnv/bin/activate
```

You should see a new `(newEnv)` at the beginning of your terminal now. This lets you know you're in your venv.

### Now in your venv install numpy & pandas
```bash
pip install pandas
pip install numpy
```

you'll notice pip recognized we had numpy installed already because it is a dependency to pandas.

Now you can open a python shell in your venv and use pandas

create a python file named `data.py`

Add this code to `data.py`
```python
import pandas as pd
data = {'col1': ['a', 'c'], 'col2': ['b', 'd']}
df = pd.DataFrame(data=data)
print(df)
```

then run your python script in your venv through terminal
```bash
python data.py

# expected output
   col1  col2
0     a     b
1     c     d
```

### To deactivate your venv
use command `deactivate`
```bash
deactivate
```
