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



def smallest_with_substring(word, substr):
    n, m = len(word), len(substr)
    candidates = []

    for i in range(n - m + 1):
        possible = True
        temp = list(word)

        # Try inserting substr at position i
        for j in range(m):
            if temp[i + j] != '?' and temp[i + j] != substr[j]:
                possible = False
                break
            temp[i + j] = substr[j]  # Replace ? or leave matching char

        if possible:
            # Replace remaining ? with 'a' to get smallest lex string
            final = ''.join(c if c != '?' else 'a' for c in temp)
            candidates.append(final)

    return min(candidates) if candidates else "-1"
