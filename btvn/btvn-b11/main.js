async function getShortUrl(longUrl) {
  const api = `https://api.shrtco.de/v2/shorten?url=${longUrl}`;

  try {
    const res = await fetch(api);
    const data = await res.json();

    if (data.ok) {
      return data.result.short_link;
    } else {
      throw new Error("Thất bại");
    }
  } catch (error) {
    throw new Error(`Lỗi ${error.message}`);
  }
}

const originalLink =
  "https://motchill.info/xem-phim/chuyen-gia-xao-quyet-tap-full-3232_48825.html";

getShortUrl(originalLink)
  .then((res) => console.log(`URL rút gọn : ${res}`))
  .catch((error) => console.error(error.message));
