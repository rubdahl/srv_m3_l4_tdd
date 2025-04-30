const { Op } = require('sequelize');

class BookmarkService {
	constructor(db) {
		this.client = db.sequelize;
		this.Bookmarks = db.Bookmarks;
	}

	async create(Name, URL, UserId) {
		return this.Bookmarks.create({
			Name: Name,
			url: URL,
			UserId: UserId,
		});
	}

	async getBookmark(id) {
		return await this.Bookmarks.findOne({
			where: { id: id },
		});
	}

	async getUsersBookmarks(userId) {
		return await this.Bookmarks.findAll({
			where: { UserId: userId },
		});
	}
}
module.exports = BookmarkService;

