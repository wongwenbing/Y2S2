# **Practical 5B: POS and NER**
- Perform Part-of-Speech (POS) tagging
- Identify entities with raw text using Name Entity Recognition (NER)

## Part of Spech (POS) Tagging

**Libraries and download packages**
```python
import pandas as pd

import nltk
nltk.download('averaged_perceptron_tagger')
nltk.download('maxent_ne_chunker_tab')

from nltk.corpus import stopwords 
from nltk.tokenize import word_tokenize, sent_tokenize 
stop_words = set(stopwords.words('english'))

```
In this practical, you are reading in SGNews.csv hence pandas is used for read_csv

**Using POS-tagger in NLTK library for word tags**  
** tokenize then pos tagging 
```Python
def tagPOS(text):
    # Word tokenizers is used to find the words 
    wordsList = nltk.word_tokenize(text) 
    #  Using a Tagger. Which is part-of-speech tagger or POS-tagger.  
    tagged = nltk.pos_tag(wordsList)  
    return tagged
#use lambda to apply tagPOS to each review
df['POS_News'] = df['Text'].apply(lambda x: tagPOS(x))  
df.head()
```




**Finding specific tag from tag text**  
```Python 
# find the top N words based on the POS tag
def findtags(tag_prefix, tagged_text, n):
    cfd = nltk.ConditionalFreqDist((tag, word) for (word, tag) in tagged_text
                                  if tag.startswith(tag_prefix))
    return dict((tag, cfd[tag].most_common(n)) for tag in cfd.conditions())

# find the top 5 adjective in the first news
tagged_text = df['POS_News'][0]
tagdict = findtags('JJ', tagged_text, 5)
for tag in sorted(tagdict):
    print(tag, tagdict[tag])
```

## Named Entity Recognition (NER)  
- standard NLP Problem involving spotting name entities from chunk of text and classifying into predefined set of categories. 

Before POS is done, 
```Python
from nltk import ne_chunk
nltk.download('words')
nltk.download('maxent_ne_chunker')

res_chunk = ne_chunk(tagged_text)

for x in str(res_chunk).split('\n'):
    if '/NN' in x:
        print(x)
```


```python

```
