/**
 * @module StudentsService
 */

var path = require('path');
var database = require(path.join(SRC_ROOT, 'modules/database.js'));

/**
 * Get random student's profiles.
 * @param {Function} callback Callback function returns student's profiles.
 * [{
 *    nameKor: String,
 *    nameEng: String,
 *    majorKor: String,
 *    majorEng: String,
 *    imgName: String,
 *    title: String,
 *    vision: String,
 *    movieUrl: String
 *  },
 *  ...
 * ]
 * @param {Number} num number of student's profiles
 */
exports.getRndProfiles = function (num, callback) {
  if(num)
  	callback(sampleData.slice(0, num));
  else {
  	callback(sampleData);
  }
};

/**
 * Counting rows in Students table.
 * @param {function} callback Callback
 * @return {Number} count of all students
 */
exports.getMaxStudents = function (callback) {
  database.query('SELECT MAX(stu_id) - MIN(stu_id) + 1 AS num FROM Students'
    , function (err, rows, fields) {
      if (err) throw err;
      callback(rows[0].num);
  });
};

// temp data
var sampleData = [{
	nameKor: '김다혜',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130219/14/kooseungmo.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	nameKor: '이건희',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130626/17/1111111.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	nameKor: '이재봉',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130219/14/kimdongjin.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	nameKor: '유선',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130219/14/kimjongkyu.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	nameKor: '김민주',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130219/14/parkjeasung.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	nameKor: '이재봉',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130219/14/kimdongjin.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	nameKor: '유선',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130219/14/kimjongkyu.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	nameKor: '김민주',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130219/14/parkjeasung.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	nameKor: '김다혜',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130626/18/2.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	nameKor: '이건희',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130219/14/seokyoungjin.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	nameKor: '이재봉',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130219/14/sonyoungsu.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	nameKor: '유선',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130219/14/ohdongwoo.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	nameKor: '김민주',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130219/14/yunjisu.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	nameKor: '이건희',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130221/19/lny(1).jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	nameKor: '이재봉',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20140702/14/2.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	nameKor: '유선',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130318/15/p11(3).jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	nameKor: '김민주',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130219/14/imseokhyeon.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	nameKor: '김다혜',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20140324/16/1.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	nameKor: '이건희',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130219/14/chunghoyoung.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	nameKor: '이재봉',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20140122/17/12.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	nameKor: '김민주',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130219/14/joohyungchulcylog.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	nameKor: '김다혜',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20140128/11/1.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	nameKor: '이건희',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130221/19/hsj.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
}];