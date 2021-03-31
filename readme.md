# Antd table skeleton loading

A simple table skeleton loading implementation for antd. You can use it by toggeling the SkeletonTable and the actual table based on the loading state.

```
{loading ? (
    <SkeletonTable rowCount={5} columns={columns} />
) : (
    <Table columns={columns} />
)}
```
