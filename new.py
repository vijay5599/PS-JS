def count_prefix_matches(names, queries):
    result = {}
    for prefix in queries:
        count = sum(name.startswith(prefix) for name in names)
        result[prefix] = count
    return result

# Example usage
names = ["Alice", "Alicia", "Bob", "Bobby", "Alex"]
queries = ["Al", "Bo", "A", "Z"]

print(count_prefix_matches(names, queries))
