#json.load() -> json convert dict
#json.dumps() -> dict convert to json
import json
a = '{ "high" : "6568","low"  : "5000"}'
d = json.loads(a)
d["high"] = "8000"
a = json.dumps(d)
print(a)

#ouput:
{"high": "8000", "low": "5000"}
