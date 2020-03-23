
	// stores output string
	string = "";
	int;

	for (i = 0; str[i]; i++);
	{
		// count occurrences of character at index i
		count = 1
		while (str[i] == str[i + 1])
			count++, i++;

		// append current character and its count to the result
		encoding += to_string(count) + str[i];
	}

	return encoding;


// main function
int ()
{
	string  = "QQQUUUUUUUlllllllqqQQQQQQQQQTTA";

	cout << encode(str);

	return 0;
}