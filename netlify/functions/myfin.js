exports.handler = async (event) => {
  try {
    const url = event.queryStringParameters.url;

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/137 Safari/537.36"
      }
    });

    const html = await response.text();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Access-Control-Allow-Origin": "*"
      },
      body: html
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: e.toString()
    };
  }
};