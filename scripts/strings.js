const Strings = {
  copy: {
    "en-US": "Copy",
    "vi-VN": "Sao Chép",
  },
  copyN: {
    "en-US": "Copy Many",
    "vi-VN": "Copy Many",
  },
  batch: {
    "en-US": "Batch Copy",
    "vi-VN": "Batch Copy",
  },
  playerInfo: {
    "en-US": "Some item IDs may not fit in the player's name.",
    "vi-VN": "Một số ID vật phẩm không được phép nhập vào tên người chơi.",
  },
  debugFileInfo: {
    "en-US":
      "If the option isn't available in your save file, ensure you have slept at least one day in version 1.6.9 or later.",
    "vi-VN":
      "Nếu bạn không có tùy chọn đó trong tệp lưu, hãy đảm bảo bạn ngủ ít nhất một ngày trong phiên bản Stardew Valley 1.6.9 trở lên.",
  },
  image: {
    "en-US": "Images",
    "vi-VN": "Images",
  },
  item: {
    "en-US": "Items",
    "vi-VN": "Items",
  },
  actions: {
    "en-US": "Actions",
    "vi-VN": "Actions",
  },
  description1: {
    "en-US":
      "Tool developed by <a href='https://github.com/MateusAquino' target='_blank'>Mateus Aquino</a> and edited by <a href='https://github.com/haizdwng' target='_blank'>Quang Quân</a> to help you find the IDs of items in Stardew Valley <b>updated for the 1.6 update</b>.",
    "vi-VN":
      "Công cụ được phát triển bởi <a href='https://github.com/MateusAquino' target='_blank'>Mateus Aquino</a> và chỉnh sửa bởi <a href='https://github.com/haizdwng' target='_blank'>Quang Quân</a> để giúp bạn tìm ID vật phẩm trong Stardew Valley <b>phiên bản 1.6</b>.",
  },
  spawn: {
    "en-US": "Spawning items",
    "vi-VN": "Spawning items",
  },
  description2: {
    "en-US":
      'You can spawn items by appending the item ID to your character\'s name and then talking to NPCs, or by <b>buying a pet from Marnie</b> appending the item ID to its name.<br><br>During early game you can easily trigger character\'s name spawns by <b> talking to Gus via phone</b> (or Pierre before 12:00) and after unlocking the cinema you can spam it by<b> inviting Jodi with a <a href="https://stardewvalleywiki.com/Jodi#Movies_&amp;_Concessions" target="_blank">Love Concession</a> to the movie theater</b> (fastest spawn rate).<br><br>Be aware that certain item IDs <b>may exceed the pet\'s name character limit</b>. In such instances, you can use the copy button provided by this tool to bypass the limit. It works by breaking lines to fit the codes into Marnie\'s text box width and removing the line breaks using the new <a href="https://stardewvalleywiki.com/Modding:Migrate_to_Stardew_Valley_1.6#:~:text=Added%20new%20dialogue%20commands,male%20or%20female" target="_blank">dialogue command</a>.<br><br><b>Warning: Use the item IDs below at your own risk. Doing so may affect your gaming experience.',
    "vi-VN":
      'Bạn có thể tạo vật phẩm bằng cách thêm ID vật phẩm vào tên nhân vật của bạn rồi nói chuyện với NPC, hoặc bằng cách <b>mua thú cưng từ Marnie</b> và thêm ID vật phẩm vào tên của nó.<br><br>Trong giai đoạn đầu trò chơi, bạn có thể dễ dàng kích hoạt việc tạo vật phẩm qua tên nhân vật bằng cách <b>gọi điện cho Gus</b> (hoặc gặp Pierre trước 12:00), và sau khi mở rạp chiếu phim, bạn có thể tăng tốc độ sinh bằng cách <b>mời Jodi với một <a href="https://stardewvalleywiki.com/Jodi#Movies_&amp;_Concessions" target="_blank">Thứ Ưa Thích</a> đến rạp chiếu phim</b> (tốc độ tạo nhanh nhất).<br><br>Lưu ý rằng một số ID vật phẩm <b>có thể vượt quá giới hạn ký tự cho tên thú cưng</b>. Trong những trường hợp đó, bạn có thể sử dụng nút sao chép được cung cấp bởi công cụ này để vượt qua giới hạn. Cách này hoạt động bằng cách ngắt dòng để vừa với ô trò chuyện của Marnie và sau đó loại bỏ ngắt dòng bằng <a href="https://stardewvalleywiki.com/Modding:Migrate_to_Stardew_Valley_1.6#:~:text=Added%20new%20dialogue%20commands,male%20or%20female" target="_blank">lệnh thoại mới</a>.<br><br><b>Cảnh báo: Việc sử dụng các ID vật phẩm dưới đây là tự chịu rủi ro. Làm như vậy có thể ảnh hưởng đến trải nghiệm chơi game của bạn.</b>',
  },
  description2debug: {
    "en-US":
      'You can also spawn items using chat cheats. It\'s the <b>only option for mobile players</b> since breaking lines in Marnie doesn\'t work. To enable chat cheats in your save, please follow below instructions:<ol><li> <a href="https://stardewvalleywiki.com/Saves#Find_your_save_files" rel="noopener" target="_blank">Locate your save file</a></li><li><a href="https://stardewvalleywiki.com/Saves#Edit_a_save" rel="noopener" target="_blank">Edit the save file</a> (make a backup first)</li><li>Find the <code>&lt;allowChatCheats&gt;</code> element and change its value to <code>true</code><div class="action info inline readonly" id="debugFileInfo" data-text="If the option isn\'t available in your save file, ensure you have slept at least one day in version 1.6.9 or later."></div></li><li>Load the save normally</li></ol>With this mode enabled, you don\'t need to rename your pets or change your name using item codes. Simply copy the command from the icon below and paste it into the chat. (<b><a href="https://github.com/haizdwng/stardewvalleyids/issues/1#issue-3034060397" rel="noopener" target="_blank">Mobile players</a></b>: tap the date in the top-right corner to open the chat) The item will then be spawned in your inventory.<br><br>There are <a href="https://stardewvalleywiki.com/Modding:Console_commands#Debug_commands" rel="noopener" target="_blank">many debug commands available</a>, such as setting money, adjusting movement speed, warping to locations, and more.<br><br><b>Warning: Use the item IDs below at your own risk. Doing so may affect your gaming experience.</b>',
    "vi-VN":
      'Bạn cũng có thể tạo vật phẩm bằng cách sử dụng Chat Cheats. Đây là <b>lựa chọn duy nhất dành cho người chơi trên di động</b> vì cách ngắt dòng trong khung nhập của Marnie không hoạt động. Để bật Chat Cheats trong file lưu của bạn, hãy làm theo hướng dẫn sau:<ol><li><a href="https://stardewvalleywiki.com/Saves#Find_your_save_files" rel="noopener" target="_blank">Xác định vị trí file lưu của bạn</a></li><li><a href="https://stardewvalleywiki.com/Saves#Edit_a_save" rel="noopener" target="_blank">Chỉnh sửa file lưu</a> (hãy sao lưu trước)</li><li>Tìm phần tử <code>&lt;allowChatCheats&gt;</code> và đổi giá trị của nó thành <code>true</code><div class="action info inline readonly" id="debugFileInfo" data-text="Nếu tuỳ chọn này không có trong file lưu của bạn, hãy chắc chắn rằng bạn đã ngủ ít nhất một đêm trong phiên bản Stardew Valley 1.6.9 hoặc cao hơn."></div></li><li>Tải lại file lưu như bình thường</li></ol>Khi đã bật chế độ này, bạn không cần đổi tên thú cưng hay tên nhân vật với mã vật phẩm nữa. Chỉ cần sao chép lệnh từ biểu tượng bên dưới và dán vào khung chat. (<b><a href="https://github.com/haizdwng/stardewvalleyids/issues/1#issue-3034060397" rel="noopener" target="_blank">Người chơi di động</a></b>: nhấn vào ngày ở góc trên bên phải để mở khung chat) Vật phẩm sẽ xuất hiện trong kho đồ của bạn.<br><br>Có rất nhiều <a href="https://stardewvalleywiki.com/Modding:Console_commands#Debug_commands" rel="noopener" target="_blank">lệnh debug khác nhau</a>, như thêm tiền, chỉnh tốc độ di chuyển, dịch chuyển đến vị trí khác, v.v.<br><br><b>Cảnh báo: Việc sử dụng các ID vật phẩm dưới đây là tự chịu rủi ro. Làm như vậy có thể ảnh hưởng đến trải nghiệm chơi game của bạn.</b>',
  },
  free: {
    "en-US": "More Tools",
    "vi-VN": "More Tools",
  },
  cancel: {
    "en-US": "Cancel",
    "vi-VN": "Hủy bỏ",
  },
  "free-description": {
    "en-US": `This is an advanced section where you can freely type any content to be escaped into Marnie's dialogue box. This includes some <a href="https://stardewvalleywiki.com/Modding:Dialogue" rel="noopener" target="_blank">dialogue commands</a> and  <a href="https://stardewvalleywiki.com/Modding:Trigger_actions" rel="noopener" target="_blank">trigger actions</a>.`,
    "vi-VN": `Đây là mục nâng cao nơi bạn có thể tự do nhập bất kỳ nội dung nào để được chuyển thành đoạn thoại trong khung hội thoại của Marnie. Nội dung này có thể bao gồm một số <a href="https://stardewvalleywiki.com/Modding:Dialogue" rel="noopener" target="_blank">lệnh thoại</a> và <a href="https://stardewvalleywiki.com/Modding:Trigger_actions" rel="noopener" target="_blank">hành động kích hoạt</a>.`,
  },
  "free-description2": {
    "en-US": `<span>You may also want to visit the Stardew Valley Save Editor for tools to edit your save files:</span><a href="https://colecrouter.github.io/stardew-save-editor" target="_blank"><img src="assets/images/svse.png" alt="Item" loading="lazy"></a><span class="source">ref: <a href="https://colecrouter.github.io/stardew-save-editor" target="_blank">https://colecrouter.github.io/stardew-save-editor</a></span>`,
    "vi-VN": `<span>Bạn cũng có thể muốn ghé thăm Stardew Valley Save Editor để sử dụng công cụ chỉnh sửa file lưu của bạn:</span><a href="https://colecrouter.github.io/stardew-save-editor" target="_blank"><img src="assets/images/svse.png" alt="Item" loading="lazy"></a><span class="source">Tham khảo: <a href="https://colecrouter.github.io/stardew-save-editor" target="_blank">https://colecrouter.github.io/stardew-save-editor</a></span>`,
  },
  "modal-description": {
    "en-US": "Type the number of items you want to copy:",
    "vi-VN": "Nhập số lượng vật phẩm bạn muốn sao chép:",
  },
  pastemode: {
    "en-US": "Paste in:",
    "vi-VN": "Dán vào:",
  },
  chickenName: {
    "en-US": "Chicken Name",
    "vi-VN": "Tên con gà",
  },
  playerName: {
    "en-US": "Player Name",
    "vi-VN": "Tên người chơi",
  },
  quality: {
    "en-US": "Quality:",
    "vi-VN": "Chất lượng:",
  },
  default: {
    "en-US": "Default",
    "vi-VN": "Mặc định",
  },
  silver: {
    "en-US": "Silver",
    "vi-VN": "Bạc",
  },
  gold: {
    "en-US": "Gold",
    "vi-VN": "Vàng",
  },
  iridium: {
    "en-US": "Iridium",
    "vi-VN": "Iridium",
  },

  "category-Litter": {
    "en-US": "Litter",
    "vi-VN": "Litter",
  },
  "category-Basic": {
    "en-US": "Basic",
    "vi-VN": "Basic",
  },
  "category-Minerals": {
    "en-US": "Minerals",
    "vi-VN": "Khoáng Sản",
  },
  "category-Quest": {
    "en-US": "Quest",
    "vi-VN": "Nhiệm Vụ",
  },
  "category-Crafting": {
    "en-US": "Crafting",
    "vi-VN": "Chế Tạo",
  },
  "category-Arch": {
    "en-US": "Arch",
    "vi-VN": "Cổ Vật",
  },
  "category-Fish": {
    "en-US": "Fish",
    "vi-VN": "Cá",
  },
  "category-Cooking": {
    "en-US": "Cooking",
    "vi-VN": "Thức Ăn",
  },
  "category-Seeds": {
    "en-US": "Seeds",
    "vi-VN": "Hạt Giống",
  },
  "category-Ring": {
    "en-US": "Ring",
    "vi-VN": "Nhẫn",
  },
  "category-asdf": {
    "en-US": "Misc",
    "vi-VN": "Misc",
  },
  "category-$All": {
    "en-US": "All",
    "vi-VN": "Tất Cả",
  },
  "chat-cheats": {
    "en-US": "Chat Cheats",
    "vi-VN": "Chat Cheats",
  },
  advanced: {
    "en-US": "Advanced",
    "vi-VN": "Advanced",
  },
};
