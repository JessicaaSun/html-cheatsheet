const data = [
  {
    title: "Document Structure",
    description:
      "Basic structure នៃ HTML document មានដូចជា ការប្រកាស &lt;!DOCTYPE html&gt;, &lt;html&gt; element, ផ្នែក &lt;head&gt;, និងផ្នែក &lt;body&gt;។",
    code: `&lt;!DOCTYPE html&gt;
    &lt;html lang="en"&gt;
    
        &lt;head&gt;
            &lt;meta charset="UTF-8"&gt;
            &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
            &lt;title&gt;HTML Structure Example&lt;/title&gt;
        &lt;/head&gt;
    
        &lt;body&gt;
    
        &lt;/body&gt;
    
    &lt;/html&gt;`,
  },
  {
    title: "Comments",
    description:
      "HTML comments អាចអោយយើងសរសេរកំណត់ចំណាំផ្សេងៗនៅក្នុងកូដ ប៉ុន្តែវាមិនត្រូវបានបង្ហាញលើ webpage នោះទេ។",
    code: `    &lt;!-- This is a comment --&gt;
    &lt;p&gt;Content goes here...&lt;/p&gt;
    &lt;!-- Another comment --&gt;`,
  },
  {
    title: "Line Break",
    description:
      "&lt;br&gt; ត្រូវ​បាន​ប្រើ​ដើម្បី​ចុះ​បន្ទាត់​ក្នុង​អត្ថបទ ដោយ​ content ​ដែល​នៅ​ពី​ក្រោយ​វា​បង្ហាញ​នៅ​លើ​បន្ទាត់​ថ្មី។",
    code: `&lt;p&gt;This is some content.&lt;br&gt;Now it's on a new line.&lt;/p&gt;`,
  },
  {
    title: "Headings",
    description:
      "Headings នៅក្នុង HTML ត្រូវបានប្រើដើម្បីកំណត់ structure និង hierarchy នៃ content នៅលើ webpage។ វាមានចាប់ពី &lt;h1&gt; (ធំបំផុត និងសំខាន់បំផុត) ដល់ &lt;h6&gt; (តូចបំផុត)។",
    code: `   &lt;h1&gt;Main Heading&lt;/h1&gt;
    &lt;h2&gt;Heading 2&lt;/h2&gt;
    &lt;h3&gt;Heading 3&lt;/h3&gt;
    &lt;h4&gt;Heading 4&lt;/h4&gt;
    &lt;h5&gt;Heading 5&lt;/h5&gt;
    &lt;h6&gt;Heading 6&lt;/h6&gt;`,
  },
  {
    title: "Paragraph",
    description:
      "&ltp&gt; element នៅក្នុង HTML ត្រូវបានប្រើដើម្បីកំណត់ឬបង្ហាញកថាខណ្ឌ។",
    code: `&lt;p&gt;This is a sample paragraph. It serves as a basic unit of text in HTML.&lt;/p&gt;`,
  },
  {
    title: "Links",
    description:
      "Links ត្រូវបានប្រើសម្រាប់ navigate រវាង pages និង resources។ &lta&gt; (anchor) ត្រូវបានប្រើដើម្បីបង្កើត hyperlinks។",
    code: `&lt;a href="https://k-quicksight.istad.co/"&gt;Visit K-QuickSight&lt;/a&gt;`,
  },
  {
    title: "Lists",
    description:
      "Lists ក្នុង HTML មាន​៣ប្រភេទគឺ ordered list, unordered list និង Definition list។",
    code: `&lt;!-- Unordered List --&gt;
    &lt;ul&gt;
        &lt;li&gt;Item 1&lt;/li&gt;
        &lt;li&gt;Item 2&lt;/li&gt;
        &lt;li&gt;Item 3&lt;/li&gt;
    &lt;/ul&gt;

    &lt;!-- Ordered List --&gt;
    &lt;ol&gt;
        &lt;li&gt;First Item&lt;/li&gt;
        &lt;li&gt;Second Item&lt;/li&gt;
        &lt;li&gt;Third Item&lt;/li&gt;
    &lt;/ol&gt;

    &lt;!-- Definition List --&gt;
    &lt;dl&gt;
        &lt;dt&gt;Term 1&lt;/dt&gt;
        &lt;dd&gt;Description for Term 1&lt;/dd&gt;
        &lt;dt&gt;Term 2&lt;/dt&gt;
        &lt;dd&gt;Description for Term 2&lt;/dd&gt;
    &lt;/dl&gt;

    &lt;!-- Nested List --&gt;
    &lt;ul&gt;
        &lt;li&gt;Item 1&lt;/li&gt;
        &lt;li&gt;Item 2
            &lt;ul&gt;
                &lt;li&gt;Subitem 2.1&lt;/li&gt;
                &lt;li&gt;Subitem 2.2&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/li&gt;
        &lt;li&gt;Item 3&lt;/li&gt;
    &lt;/ul&gt;
    `,
  },
  {
    title: "Images",
    description: "&ltimg&gt; element ត្រូវបានប្រើសម្រាប់បង្ហាញរូបភាព។",
    code: `    &lt;img src="example.jpg" alt="Example Image" /&gt;`,
  },
  {
    title: "Forms",
    description:
      "Forms គឺត្រូវបានប្រើសម្រាប់ផ្ទុកនូវការបញ្ចូលផ្សេងៗរបស់អ្នកប្រើប្រាស់។ &ltform&gt; element ក្តោប form ទាំងមូលដែលមានប្រភេទ input ផ្សេងៗដូចជា `&lt;input&gt;`, `&lt;teatarea&gt;`, `&lt;select&gt;`។ល។",
    code: `&lt;form action="/submit" method="post"&gt;
    &lt;label&gt; for="username"&gt;Username:&lt;/label&gt;
    &lt;input type="text" id="username" name="username" /&gt;

    &lt;label&gt; for="password"&gt;Password:&lt;/label&gt;
    &lt;input type="password" id="password" name="password" /&gt;

    &lt;input type="submit" value="Submit" /&gt;
  &lt;/form&gt;`,
  },
  {
    title: "Input Types",
    description: "",
    code: `&lt;!-- text --&gt;
    &lt;label for="firstname"&gt;Enter first name&lt;/label&gt;
    &lt;input type="text" maxlength="10" id="firstname" name="firstname" /&gt;

    &lt;!-- number --&gt;
    &lt;label for="age"&gt;Enter age&lt;/label&gt;
    &lt;input type="number" id="age" name="age" /&gt;

    &lt;!-- password --&gt;
    &lt;label for="password"&gt;Enter password&lt;/label&gt;
    &lt;input type="password" id="password" name="password" /&gt;

    &lt;!-- email --&gt;
    &lt;label for="email"&gt;Enter email&lt;/label&gt;
    &lt;input
      type="email"
      id="email"
      name="email"
      placeholder="jessica@gmail.com"
    /&gt;

    &lt;!-- tel --&gt;
    &lt;label for="tel"&gt;Enter phone number (in format of xxx-xxx-xxxx)&lt;/label&gt;
    &lt;input
      type="tel"
      id="tel"
      name="tel"
      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
    /&gt;

    &lt;!-- date --&gt;
    &lt;label for="date"&gt;Start date&lt;/label&gt;
    &lt;input type="datetime-local" id="date" name="date" /&gt;

    &lt;!-- radio --&gt;
    &lt;p&gt;Please select your favorite animals&lt;/p&gt;
    &lt;input value="dog" type="radio" id="dog" name="animal" /&gt;
    &lt;label for="dog"&gt;Dog&lt;/label&gt;

    &lt;input value="cat" type="radio" id="cat" name="animal" /&gt;
    &lt;label for="cat"&gt;Cat&lt;/label&gt;

    &lt;!-- color picker --&gt;
    &lt;p&gt;Please select your favorite color&lt;/p&gt;
    &lt;input type="color" name="color" value="#a52a2a" /&gt;

    &lt;!-- checkbox --&gt;
    &lt;p&gt;Please select your favorite colors&lt;/p&gt;
    &lt;input value="green" type="checkbox" id="green" name="colors[]" /&gt;
    &lt;label for="green"&gt;Green&lt;/label&gt;

    &lt;input value="red" type="checkbox" id="red" name="colors[]" /&gt;
    &lt;label for="red"&gt;Red&lt;/label&gt;

    &lt;!-- file --&gt;
    &lt;label for="newfile"&gt;
      &lt;input type="file" name="newfile" id="newfile" /&gt;
    &lt;/label&gt;

    &lt;!-- button --&gt;
    &lt;input type="button" id="button" value="Button" /&gt;

    &lt;!-- reset --&gt;
    &lt;input type="reset" value="Reset" /&gt;

    &lt;!-- image --&gt;
    &lt;label for="submitImage"&gt;
      &lt;input type="image" alt="Submit" src="image" id="submitImage" /&gt;
    &lt;/label&gt;

    &lt;!-- submit --&gt;
    &lt;input type="submit" value="Submit" /&gt;`,
  },

  {
    title: "Tables",
    description:
      "Tables គឺត្រូវបានប្រើសម្រាប់បង្ហាញទិន្នន័យជាទម្រង់ជួរឈនិងជួរដេក។",
    code: `&lt;table&gt;
    &lt;thead&gt;
      &lt;tr&gt;
        &lt;th&gt;Name&lt;/th&gt;
        &lt;th&gt;Age&lt;/th&gt;
      &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
      &lt;tr&gt;
        &lt;td&gt;Jessica Sun&lt;/td&gt;
        &lt;td&gt;25&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td&gt;Sreyphea Sin&lt;/td&gt;
        &lt;td&gt;24&lt;/td&gt;
      &lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/table&gt;`,
  },

  {
    title: "Divisions - Generic Container",
    description:
      "&lt;div&gt; element គឺជា container ទូទៅដែលប្រើសម្រាប់ក្តោបទៅលើ elements ផ្សេងៗព្រមទាំងការដាក់ styles ឬ scripting។",
    code: `&lt;div&gt;
    &lt;p&gt;This is inside a division.&lt;/p&gt;
  &lt;/div&gt;

  &lt;div&gt;
    &lt;p&gt;Another division.&lt;/p&gt;
  &lt;/div&gt;`,
  },
  {
    title: "Span - Inline Container",
    description:
      "&lt;span&gt; element គឺជា inline container ដែលប្រើសម្រាប់ដាក់ styles ឬ scripting ទៅលើកន្សោមអត្ថបទណាមួយ។",
    code: `&lt;p&gt;This is &lt;span&gt; class="highlight"&gt;highlighted&lt;/span&gt; text.&lt;/p&gt;`,
  },
  {
    title: "Semantic Elements",
    description:
      "Semantic elements ផ្តល់អត្ថន័យទៅកាន់ structure នៃ webpage។ វារួមមាន &lt;header&gt;, &lt;footer&gt;, &lt;section&gt;, &lt;article&gt;, &lt;nav&gt;។ល។",
    code: `&lt;header&gt;
    &lt;h1&gt;Website Header&lt;/h1&gt;
  &lt;/header&gt;

  &lt;nav&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href="#home"&gt;Home&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#about"&gt;About&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#contact"&gt;Contact&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/nav&gt;

  &lt;section&gt;
    &lt;h2&gt;Main Section&lt;/h2&gt;
    &lt;p&gt;Content goes here...&lt;/p&gt;
  &lt;/section&gt;

  &lt;footer&gt;
    &lt;p&gt;&copy; 2024 HTML Cheatsheet &lt;/p&gt;
  &lt;/footer&gt;`,
  },
  {
    title: "Metadata",
    description:
      "Metadata tags ទាំងនេះផ្តល់នូវព័ត៌មានសំខាន់ៗអំពី webpage របស់អ្នកទៅកាន់ search engine ដោយជួយវាឱ្យយល់ និង index content របស់អ្នកប្រកបដោយប្រសិទ្ធភាព។",
    code: `    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Your Webpage Title&lt;/title&gt;
    &lt;meta name="keywords" content="HTML, Cheatsheet, Guide"&gt;
    &lt;meta name="author" content="Jessica Sun"&gt;

    &lt;!-- Metadata for SEO and Social Media --&gt;
    &lt;meta name="description" content="A concise description of your web page content"&gt;
    &lt;meta property="og:title" content="Your Webpage Title"&gt;
    &lt;meta property="og:description" content="A concise description of your web page content"&gt;
    &lt;meta property="og:image" content="https://www.example.com/thumbnail.jpg"&gt; &lt;!-- URL to your thumbnail image --&gt;
    &lt;meta property="og:url" content="https://www.example.com/your-page"&gt;`,
  },
];

export default data;
