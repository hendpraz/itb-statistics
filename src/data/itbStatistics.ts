/**
 * ITB Mahasiswa Statistics - Auto-generated
 * Generated at: 2026-02-16T10:19:38.056Z
 *
 * This file contains pre-computed statistics from mahasiswa data.
 * Do not edit manually - regenerate using generateITBStatistics.ts
 */

// ============== Types ==============

export interface StatusCount {
  lulus: number;
  undurDiri: number;
  dikeluarkan: number;
  aktif: number;
  cuti: number;
  other: number;
}

export interface GenderCount {
  male: number;
  female: number;
}

export interface GraduationByYears {
  [years: number]: number;
}

export interface BatchStatistics {
  batch: number;
  total: number;
  statusBreakdown: StatusCount;
  genderBreakdown: GenderCount;
}

export interface ProdiBatchStatistics {
  total: number;
  statusBreakdown: StatusCount;
  genderBreakdown: GenderCount;
  graduationYears: GraduationByYears;
}

export interface ProdiStatistics {
  prodiCode: string;
  prodiName: string;
  total: number;
  statusBreakdown: StatusCount;
  genderBreakdown: GenderCount;
  byBatch: { [batch: number]: ProdiBatchStatistics };
}

export interface OverallStatistics {
  totalStudents: number;
  uniqueStudents: number;
  statusBreakdown: StatusCount;
  genderBreakdown: GenderCount;
  byBatch: { [batch: number]: BatchStatistics };
  byProdi: { [prodiCode: string]: ProdiStatistics };
}

// ============== Static Data ==============

export const ITB_STATISTICS: OverallStatistics = {
  totalStudents: 90536,
  uniqueStudents: 90294,
  statusBreakdown: {
    lulus: 52877,
    undurDiri: 2698,
    dikeluarkan: 725,
    aktif: 11824,
    cuti: 6,
    other: 22406,
  },
  genderBreakdown: {
    male: 45579,
    female: 44957,
  },
  byBatch: {
    "1957": {
      batch: 1957,
      total: 1,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 1,
      },
      genderBreakdown: {
        male: 0,
        female: 1,
      },
    },
    "1958": {
      batch: 1958,
      total: 1,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 1,
      },
      genderBreakdown: {
        male: 0,
        female: 1,
      },
    },
    "1961": {
      batch: 1961,
      total: 1,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 1,
      },
      genderBreakdown: {
        male: 0,
        female: 1,
      },
    },
    "1976": {
      batch: 1976,
      total: 1,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 1,
      },
      genderBreakdown: {
        male: 0,
        female: 1,
      },
    },
    "1990": {
      batch: 1990,
      total: 1,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 1,
      },
      genderBreakdown: {
        male: 0,
        female: 1,
      },
    },
    "1991": {
      batch: 1991,
      total: 2,
      statusBreakdown: {
        lulus: 1,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 1,
      },
      genderBreakdown: {
        male: 1,
        female: 1,
      },
    },
    "1995": {
      batch: 1995,
      total: 1,
      statusBreakdown: {
        lulus: 1,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 1,
        female: 0,
      },
    },
    "1996": {
      batch: 1996,
      total: 1,
      statusBreakdown: {
        lulus: 1,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 0,
        female: 1,
      },
    },
    "1997": {
      batch: 1997,
      total: 5,
      statusBreakdown: {
        lulus: 4,
        undurDiri: 0,
        dikeluarkan: 1,
        aktif: 0,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 5,
        female: 0,
      },
    },
    "1999": {
      batch: 1999,
      total: 5,
      statusBreakdown: {
        lulus: 4,
        undurDiri: 0,
        dikeluarkan: 1,
        aktif: 0,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 5,
        female: 0,
      },
    },
    "2000": {
      batch: 2000,
      total: 31,
      statusBreakdown: {
        lulus: 7,
        undurDiri: 1,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 23,
      },
      genderBreakdown: {
        male: 7,
        female: 24,
      },
    },
    "2001": {
      batch: 2001,
      total: 13,
      statusBreakdown: {
        lulus: 9,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 4,
      },
      genderBreakdown: {
        male: 6,
        female: 7,
      },
    },
    "2002": {
      batch: 2002,
      total: 34,
      statusBreakdown: {
        lulus: 5,
        undurDiri: 1,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 28,
      },
      genderBreakdown: {
        male: 5,
        female: 29,
      },
    },
    "2003": {
      batch: 2003,
      total: 23,
      statusBreakdown: {
        lulus: 14,
        undurDiri: 1,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 8,
      },
      genderBreakdown: {
        male: 11,
        female: 12,
      },
    },
    "2004": {
      batch: 2004,
      total: 31,
      statusBreakdown: {
        lulus: 17,
        undurDiri: 1,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 13,
      },
      genderBreakdown: {
        male: 13,
        female: 18,
      },
    },
    "2005": {
      batch: 2005,
      total: 23,
      statusBreakdown: {
        lulus: 10,
        undurDiri: 1,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 12,
      },
      genderBreakdown: {
        male: 7,
        female: 16,
      },
    },
    "2006": {
      batch: 2006,
      total: 26,
      statusBreakdown: {
        lulus: 14,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 12,
      },
      genderBreakdown: {
        male: 6,
        female: 20,
      },
    },
    "2007": {
      batch: 2007,
      total: 24,
      statusBreakdown: {
        lulus: 18,
        undurDiri: 1,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 5,
      },
      genderBreakdown: {
        male: 13,
        female: 11,
      },
    },
    "2008": {
      batch: 2008,
      total: 15,
      statusBreakdown: {
        lulus: 13,
        undurDiri: 1,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 1,
      },
      genderBreakdown: {
        male: 5,
        female: 10,
      },
    },
    "2009": {
      batch: 2009,
      total: 22,
      statusBreakdown: {
        lulus: 13,
        undurDiri: 1,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 8,
      },
      genderBreakdown: {
        male: 7,
        female: 15,
      },
    },
    "2010": {
      batch: 2010,
      total: 33,
      statusBreakdown: {
        lulus: 16,
        undurDiri: 2,
        dikeluarkan: 1,
        aktif: 0,
        cuti: 0,
        other: 14,
      },
      genderBreakdown: {
        male: 9,
        female: 24,
      },
    },
    "2011": {
      batch: 2011,
      total: 167,
      statusBreakdown: {
        lulus: 143,
        undurDiri: 14,
        dikeluarkan: 10,
        aktif: 0,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 123,
        female: 44,
      },
    },
    "2012": {
      batch: 2012,
      total: 415,
      statusBreakdown: {
        lulus: 371,
        undurDiri: 33,
        dikeluarkan: 10,
        aktif: 0,
        cuti: 0,
        other: 1,
      },
      genderBreakdown: {
        male: 298,
        female: 117,
      },
    },
    "2013": {
      batch: 2013,
      total: 3174,
      statusBreakdown: {
        lulus: 3083,
        undurDiri: 57,
        dikeluarkan: 31,
        aktif: 0,
        cuti: 0,
        other: 3,
      },
      genderBreakdown: {
        male: 1846,
        female: 1328,
      },
    },
    "2014": {
      batch: 2014,
      total: 3902,
      statusBreakdown: {
        lulus: 3788,
        undurDiri: 80,
        dikeluarkan: 32,
        aktif: 0,
        cuti: 0,
        other: 2,
      },
      genderBreakdown: {
        male: 2228,
        female: 1674,
      },
    },
    "2015": {
      batch: 2015,
      total: 5123,
      statusBreakdown: {
        lulus: 4920,
        undurDiri: 160,
        dikeluarkan: 35,
        aktif: 0,
        cuti: 0,
        other: 8,
      },
      genderBreakdown: {
        male: 3048,
        female: 2075,
      },
    },
    "2016": {
      batch: 2016,
      total: 6656,
      statusBreakdown: {
        lulus: 5847,
        undurDiri: 277,
        dikeluarkan: 126,
        aktif: 0,
        cuti: 0,
        other: 406,
      },
      genderBreakdown: {
        male: 3695,
        female: 2961,
      },
    },
    "2017": {
      batch: 2017,
      total: 5113,
      statusBreakdown: {
        lulus: 4676,
        undurDiri: 244,
        dikeluarkan: 92,
        aktif: 0,
        cuti: 0,
        other: 101,
      },
      genderBreakdown: {
        male: 2904,
        female: 2209,
      },
    },
    "2018": {
      batch: 2018,
      total: 6584,
      statusBreakdown: {
        lulus: 6030,
        undurDiri: 268,
        dikeluarkan: 55,
        aktif: 9,
        cuti: 0,
        other: 222,
      },
      genderBreakdown: {
        male: 3572,
        female: 3012,
      },
    },
    "2019": {
      batch: 2019,
      total: 7534,
      statusBreakdown: {
        lulus: 6727,
        undurDiri: 256,
        dikeluarkan: 75,
        aktif: 23,
        cuti: 0,
        other: 453,
      },
      genderBreakdown: {
        male: 4148,
        female: 3386,
      },
    },
    "2020": {
      batch: 2020,
      total: 8434,
      statusBreakdown: {
        lulus: 7016,
        undurDiri: 523,
        dikeluarkan: 79,
        aktif: 127,
        cuti: 0,
        other: 689,
      },
      genderBreakdown: {
        male: 4734,
        female: 3700,
      },
    },
    "2021": {
      batch: 2021,
      total: 9229,
      statusBreakdown: {
        lulus: 4874,
        undurDiri: 417,
        dikeluarkan: 69,
        aktif: 289,
        cuti: 0,
        other: 3580,
      },
      genderBreakdown: {
        male: 4708,
        female: 4521,
      },
    },
    "2022": {
      batch: 2022,
      total: 9235,
      statusBreakdown: {
        lulus: 2824,
        undurDiri: 208,
        dikeluarkan: 105,
        aktif: 1040,
        cuti: 1,
        other: 5057,
      },
      genderBreakdown: {
        male: 5089,
        female: 4146,
      },
    },
    "2023": {
      batch: 2023,
      total: 9854,
      statusBreakdown: {
        lulus: 1888,
        undurDiri: 113,
        dikeluarkan: 3,
        aktif: 2023,
        cuti: 1,
        other: 5826,
      },
      genderBreakdown: {
        male: 5109,
        female: 4745,
      },
    },
    "2024": {
      batch: 2024,
      total: 9589,
      statusBreakdown: {
        lulus: 543,
        undurDiri: 38,
        dikeluarkan: 0,
        aktif: 3260,
        cuti: 4,
        other: 5744,
      },
      genderBreakdown: {
        male: 3976,
        female: 5613,
      },
    },
    "2025": {
      batch: 2025,
      total: 5053,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 5053,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 0,
        female: 5053,
      },
    },
    "2031": {
      batch: 2031,
      total: 1,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 1,
      },
      genderBreakdown: {
        male: 0,
        female: 1,
      },
    },
    "2042": {
      batch: 2042,
      total: 2,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 2,
      },
      genderBreakdown: {
        male: 0,
        female: 2,
      },
    },
    NaN: {
      batch: null,
      total: 177,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 177,
      },
      genderBreakdown: {
        male: 0,
        female: 177,
      },
    },
  },
  byProdi: {
    "100": {
      prodiCode: "100",
      prodiName: "Unknown Prodi",
      total: 1665,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 1665,
      },
      genderBreakdown: {
        male: 447,
        female: 1218,
      },
      byBatch: {
        "2021": {
          total: 506,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 506,
          },
          genderBreakdown: {
            male: 0,
            female: 506,
          },
          graduationYears: {},
        },
        "2022": {
          total: 346,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 346,
          },
          genderBreakdown: {
            male: 149,
            female: 197,
          },
          graduationYears: {},
        },
        "2023": {
          total: 640,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 640,
          },
          genderBreakdown: {
            male: 271,
            female: 369,
          },
          graduationYears: {},
        },
        "2024": {
          total: 173,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 173,
          },
          genderBreakdown: {
            male: 27,
            female: 146,
          },
          graduationYears: {},
        },
      },
    },
    "101": {
      prodiCode: "101",
      prodiName: "Matematika",
      total: 1258,
      statusBreakdown: {
        lulus: 893,
        undurDiri: 23,
        dikeluarkan: 7,
        aktif: 37,
        cuti: 0,
        other: 298,
      },
      genderBreakdown: {
        male: 652,
        female: 606,
      },
      byBatch: {
        "2008": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2009": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2010": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2011": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "6": 1,
          },
        },
        "2012": {
          total: 13,
          statusBreakdown: {
            lulus: 10,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 13,
            female: 0,
          },
          graduationYears: {
            "5": 2,
            "6": 5,
            "7": 3,
          },
        },
        "2013": {
          total: 99,
          statusBreakdown: {
            lulus: 90,
            undurDiri: 8,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 53,
            female: 46,
          },
          graduationYears: {
            "4": 75,
            "5": 10,
            "6": 5,
          },
        },
        "2014": {
          total: 101,
          statusBreakdown: {
            lulus: 96,
            undurDiri: 3,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 54,
            female: 47,
          },
          graduationYears: {
            "4": 86,
            "5": 8,
            "6": 2,
          },
        },
        "2015": {
          total: 110,
          statusBreakdown: {
            lulus: 110,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 62,
            female: 48,
          },
          graduationYears: {
            "4": 88,
            "5": 18,
            "6": 2,
            "7": 2,
          },
        },
        "2016": {
          total: 106,
          statusBreakdown: {
            lulus: 101,
            undurDiri: 3,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 65,
            female: 41,
          },
          graduationYears: {
            "4": 88,
            "5": 7,
            "6": 3,
            "7": 3,
          },
        },
        "2017": {
          total: 115,
          statusBreakdown: {
            lulus: 111,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 68,
            female: 47,
          },
          graduationYears: {
            "4": 91,
            "5": 13,
            "6": 5,
            "7": 2,
          },
        },
        "2018": {
          total: 110,
          statusBreakdown: {
            lulus: 104,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 62,
            female: 48,
          },
          graduationYears: {
            "4": 77,
            "5": 20,
            "6": 6,
            "7": 1,
          },
        },
        "2019": {
          total: 115,
          statusBreakdown: {
            lulus: 104,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 10,
          },
          genderBreakdown: {
            male: 59,
            female: 56,
          },
          graduationYears: {
            "4": 98,
            "5": 4,
            "6": 2,
          },
        },
        "2020": {
          total: 107,
          statusBreakdown: {
            lulus: 102,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 53,
            female: 54,
          },
          graduationYears: {
            "4": 102,
          },
        },
        "2021": {
          total: 92,
          statusBreakdown: {
            lulus: 61,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 31,
          },
          genderBreakdown: {
            male: 38,
            female: 54,
          },
          graduationYears: {
            "4": 61,
          },
        },
        "2022": {
          total: 104,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 17,
            cuti: 0,
            other: 85,
          },
          genderBreakdown: {
            male: 36,
            female: 68,
          },
          graduationYears: {},
        },
        "2023": {
          total: 95,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 11,
            cuti: 0,
            other: 84,
          },
          genderBreakdown: {
            male: 50,
            female: 45,
          },
          graduationYears: {},
        },
        "2024": {
          total: 87,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 9,
            cuti: 0,
            other: 78,
          },
          genderBreakdown: {
            male: 37,
            female: 50,
          },
          graduationYears: {},
        },
      },
    },
    "102": {
      prodiCode: "102",
      prodiName: "Fisika",
      total: 1264,
      statusBreakdown: {
        lulus: 795,
        undurDiri: 49,
        dikeluarkan: 23,
        aktif: 74,
        cuti: 0,
        other: 323,
      },
      genderBreakdown: {
        male: 791,
        female: 473,
      },
      byBatch: {
        "2005": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2008": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "5": 1,
          },
        },
        "2011": {
          total: 11,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 9,
            female: 2,
          },
          graduationYears: {
            "5": 1,
            "6": 7,
            "7": 1,
          },
        },
        "2012": {
          total: 23,
          statusBreakdown: {
            lulus: 21,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 18,
            female: 5,
          },
          graduationYears: {
            "4": 1,
            "5": 10,
            "6": 7,
            "7": 3,
          },
        },
        "2013": {
          total: 100,
          statusBreakdown: {
            lulus: 94,
            undurDiri: 1,
            dikeluarkan: 4,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 63,
            female: 37,
          },
          graduationYears: {
            "4": 55,
            "5": 31,
            "6": 6,
            "7": 2,
          },
        },
        "2014": {
          total: 91,
          statusBreakdown: {
            lulus: 86,
            undurDiri: 4,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 62,
            female: 29,
          },
          graduationYears: {
            "4": 50,
            "5": 26,
            "6": 9,
            "7": 1,
          },
        },
        "2015": {
          total: 95,
          statusBreakdown: {
            lulus: 90,
            undurDiri: 5,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 74,
            female: 21,
          },
          graduationYears: {
            "4": 51,
            "5": 31,
            "6": 2,
            "7": 6,
          },
        },
        "2016": {
          total: 106,
          statusBreakdown: {
            lulus: 99,
            undurDiri: 6,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 54,
            female: 52,
          },
          graduationYears: {
            "4": 52,
            "5": 38,
            "6": 4,
            "7": 5,
          },
        },
        "2017": {
          total: 112,
          statusBreakdown: {
            lulus: 97,
            undurDiri: 8,
            dikeluarkan: 6,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 85,
            female: 27,
          },
          graduationYears: {
            "4": 47,
            "5": 23,
            "6": 16,
            "7": 11,
          },
        },
        "2018": {
          total: 113,
          statusBreakdown: {
            lulus: 99,
            undurDiri: 1,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 10,
          },
          genderBreakdown: {
            male: 61,
            female: 52,
          },
          graduationYears: {
            "4": 61,
            "5": 25,
            "6": 11,
            "7": 2,
          },
        },
        "2019": {
          total: 115,
          statusBreakdown: {
            lulus: 94,
            undurDiri: 7,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 14,
          },
          genderBreakdown: {
            male: 61,
            female: 54,
          },
          graduationYears: {
            "4": 64,
            "5": 27,
            "6": 3,
          },
        },
        "2020": {
          total: 85,
          statusBreakdown: {
            lulus: 65,
            undurDiri: 6,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 11,
          },
          genderBreakdown: {
            male: 53,
            female: 32,
          },
          graduationYears: {
            "3": 2,
            "4": 59,
            "5": 4,
          },
        },
        "2021": {
          total: 78,
          statusBreakdown: {
            lulus: 39,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 36,
          },
          genderBreakdown: {
            male: 50,
            female: 28,
          },
          graduationYears: {
            "4": 39,
          },
        },
        "2022": {
          total: 123,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 6,
            dikeluarkan: 2,
            aktif: 33,
            cuti: 0,
            other: 82,
          },
          genderBreakdown: {
            male: 67,
            female: 56,
          },
          graduationYears: {},
        },
        "2023": {
          total: 105,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 21,
            cuti: 0,
            other: 83,
          },
          genderBreakdown: {
            male: 55,
            female: 50,
          },
          graduationYears: {},
        },
        "2024": {
          total: 105,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 20,
            cuti: 0,
            other: 85,
          },
          genderBreakdown: {
            male: 77,
            female: 28,
          },
          graduationYears: {},
        },
      },
    },
    "103": {
      prodiCode: "103",
      prodiName: "Astronomi",
      total: 562,
      statusBreakdown: {
        lulus: 306,
        undurDiri: 30,
        dikeluarkan: 14,
        aktif: 33,
        cuti: 0,
        other: 179,
      },
      genderBreakdown: {
        male: 296,
        female: 266,
      },
      byBatch: {
        "2002": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2011": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 0,
          },
          graduationYears: {
            "6": 2,
          },
        },
        "2012": {
          total: 6,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 0,
          },
          graduationYears: {
            "5": 2,
            "6": 2,
            "7": 1,
          },
        },
        "2013": {
          total: 26,
          statusBreakdown: {
            lulus: 22,
            undurDiri: 1,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 15,
            female: 11,
          },
          graduationYears: {
            "4": 16,
            "5": 3,
            "6": 2,
            "7": 1,
          },
        },
        "2014": {
          total: 28,
          statusBreakdown: {
            lulus: 27,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 12,
            female: 16,
          },
          graduationYears: {
            "4": 17,
            "5": 7,
            "6": 2,
            "7": 1,
          },
        },
        "2015": {
          total: 38,
          statusBreakdown: {
            lulus: 32,
            undurDiri: 6,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 20,
            female: 18,
          },
          graduationYears: {
            "4": 21,
            "5": 4,
            "6": 3,
            "7": 4,
          },
        },
        "2016": {
          total: 39,
          statusBreakdown: {
            lulus: 30,
            undurDiri: 5,
            dikeluarkan: 4,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 17,
            female: 22,
          },
          graduationYears: {
            "4": 20,
            "5": 7,
            "6": 1,
            "7": 2,
          },
        },
        "2017": {
          total: 50,
          statusBreakdown: {
            lulus: 47,
            undurDiri: 1,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 20,
            female: 30,
          },
          graduationYears: {
            "4": 23,
            "5": 15,
            "6": 6,
            "7": 3,
          },
        },
        "2018": {
          total: 50,
          statusBreakdown: {
            lulus: 40,
            undurDiri: 2,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 27,
            female: 23,
          },
          graduationYears: {
            "4": 30,
            "5": 9,
            "6": 1,
          },
        },
        "2019": {
          total: 50,
          statusBreakdown: {
            lulus: 42,
            undurDiri: 5,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 24,
            female: 26,
          },
          graduationYears: {
            "4": 36,
            "5": 6,
          },
        },
        "2020": {
          total: 53,
          statusBreakdown: {
            lulus: 38,
            undurDiri: 7,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 7,
          },
          genderBreakdown: {
            male: 33,
            female: 20,
          },
          graduationYears: {
            "4": 37,
            "5": 1,
          },
        },
        "2021": {
          total: 46,
          statusBreakdown: {
            lulus: 21,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 23,
          },
          genderBreakdown: {
            male: 33,
            female: 13,
          },
          graduationYears: {
            "4": 21,
          },
        },
        "2022": {
          total: 62,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 11,
            cuti: 0,
            other: 50,
          },
          genderBreakdown: {
            male: 28,
            female: 34,
          },
          graduationYears: {},
        },
        "2023": {
          total: 56,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 14,
            cuti: 0,
            other: 42,
          },
          genderBreakdown: {
            male: 26,
            female: 30,
          },
          graduationYears: {},
        },
        "2024": {
          total: 55,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 7,
            cuti: 0,
            other: 48,
          },
          genderBreakdown: {
            male: 33,
            female: 22,
          },
          graduationYears: {},
        },
      },
    },
    "104": {
      prodiCode: "104",
      prodiName: "Mikrobiologi",
      total: 510,
      statusBreakdown: {
        lulus: 314,
        undurDiri: 7,
        dikeluarkan: 2,
        aktif: 25,
        cuti: 0,
        other: 162,
      },
      genderBreakdown: {
        male: 174,
        female: 336,
      },
      byBatch: {
        "2001": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 3,
          },
          graduationYears: {},
        },
        "2011": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "7": 1,
          },
        },
        "2012": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 1,
          },
          graduationYears: {
            "5": 2,
            "6": 1,
          },
        },
        "2013": {
          total: 39,
          statusBreakdown: {
            lulus: 39,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 14,
            female: 25,
          },
          graduationYears: {
            "4": 36,
            "5": 2,
            "6": 1,
          },
        },
        "2014": {
          total: 37,
          statusBreakdown: {
            lulus: 37,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 11,
            female: 26,
          },
          graduationYears: {
            "4": 30,
            "5": 5,
            "6": 1,
            "7": 1,
          },
        },
        "2015": {
          total: 39,
          statusBreakdown: {
            lulus: 39,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 19,
            female: 20,
          },
          graduationYears: {
            "4": 30,
            "5": 8,
            "6": 1,
          },
        },
        "2016": {
          total: 40,
          statusBreakdown: {
            lulus: 39,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 16,
            female: 24,
          },
          graduationYears: {
            "4": 20,
            "5": 17,
            "6": 2,
          },
        },
        "2017": {
          total: 41,
          statusBreakdown: {
            lulus: 39,
            undurDiri: 0,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 18,
            female: 23,
          },
          graduationYears: {
            "4": 33,
            "5": 4,
            "6": 2,
          },
        },
        "2018": {
          total: 37,
          statusBreakdown: {
            lulus: 35,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 11,
            female: 26,
          },
          graduationYears: {
            "4": 28,
            "5": 4,
            "6": 2,
            "7": 1,
          },
        },
        "2019": {
          total: 47,
          statusBreakdown: {
            lulus: 41,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 14,
            female: 33,
          },
          graduationYears: {
            "4": 38,
            "5": 3,
          },
        },
        "2020": {
          total: 42,
          statusBreakdown: {
            lulus: 34,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 8,
          },
          genderBreakdown: {
            male: 15,
            female: 27,
          },
          graduationYears: {
            "4": 34,
          },
        },
        "2021": {
          total: 35,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 31,
          },
          genderBreakdown: {
            male: 9,
            female: 26,
          },
          graduationYears: {
            "4": 4,
          },
        },
        "2022": {
          total: 48,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 10,
            cuti: 0,
            other: 37,
          },
          genderBreakdown: {
            male: 14,
            female: 34,
          },
          graduationYears: {},
        },
        "2023": {
          total: 54,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 11,
            cuti: 0,
            other: 41,
          },
          genderBreakdown: {
            male: 17,
            female: 37,
          },
          graduationYears: {},
        },
        "2024": {
          total: 44,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 41,
          },
          genderBreakdown: {
            male: 14,
            female: 30,
          },
          graduationYears: {},
        },
      },
    },
    "105": {
      prodiCode: "105",
      prodiName: "Kimia",
      total: 1205,
      statusBreakdown: {
        lulus: 720,
        undurDiri: 38,
        dikeluarkan: 13,
        aktif: 93,
        cuti: 0,
        other: 341,
      },
      genderBreakdown: {
        male: 431,
        female: 774,
      },
      byBatch: {
        "2003": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2005": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 2,
          },
          graduationYears: {},
        },
        "2008": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2010": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2011": {
          total: 8,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 3,
          },
          graduationYears: {
            "5": 1,
            "6": 3,
            "7": 3,
          },
        },
        "2012": {
          total: 16,
          statusBreakdown: {
            lulus: 13,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 11,
            female: 5,
          },
          graduationYears: {
            "5": 1,
            "6": 7,
            "7": 5,
          },
        },
        "2013": {
          total: 86,
          statusBreakdown: {
            lulus: 86,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 32,
            female: 54,
          },
          graduationYears: {
            "3": 1,
            "4": 47,
            "5": 26,
            "6": 10,
            "7": 2,
          },
        },
        "2014": {
          total: 79,
          statusBreakdown: {
            lulus: 75,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 28,
            female: 51,
          },
          graduationYears: {
            "4": 61,
            "5": 7,
            "6": 5,
            "7": 2,
          },
        },
        "2015": {
          total: 86,
          statusBreakdown: {
            lulus: 81,
            undurDiri: 3,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 39,
            female: 47,
          },
          graduationYears: {
            "4": 49,
            "5": 20,
            "6": 4,
            "7": 8,
          },
        },
        "2016": {
          total: 92,
          statusBreakdown: {
            lulus: 82,
            undurDiri: 8,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 46,
            female: 46,
          },
          graduationYears: {
            "4": 45,
            "5": 28,
            "6": 7,
            "7": 2,
          },
        },
        "2017": {
          total: 102,
          statusBreakdown: {
            lulus: 97,
            undurDiri: 3,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 29,
            female: 73,
          },
          graduationYears: {
            "4": 50,
            "5": 33,
            "6": 6,
            "7": 8,
          },
        },
        "2018": {
          total: 100,
          statusBreakdown: {
            lulus: 90,
            undurDiri: 2,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 37,
            female: 63,
          },
          graduationYears: {
            "4": 61,
            "5": 21,
            "6": 7,
            "7": 1,
          },
        },
        "2019": {
          total: 100,
          statusBreakdown: {
            lulus: 85,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 11,
          },
          genderBreakdown: {
            male: 33,
            female: 67,
          },
          graduationYears: {
            "4": 69,
            "5": 16,
          },
        },
        "2020": {
          total: 106,
          statusBreakdown: {
            lulus: 90,
            undurDiri: 5,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 10,
          },
          genderBreakdown: {
            male: 45,
            female: 61,
          },
          graduationYears: {
            "4": 87,
            "5": 3,
          },
        },
        "2021": {
          total: 104,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 1,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 92,
          },
          genderBreakdown: {
            male: 31,
            female: 73,
          },
          graduationYears: {
            "4": 9,
          },
        },
        "2022": {
          total: 113,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 4,
            dikeluarkan: 1,
            aktif: 30,
            cuti: 0,
            other: 78,
          },
          genderBreakdown: {
            male: 37,
            female: 76,
          },
          graduationYears: {},
        },
        "2023": {
          total: 107,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 33,
            cuti: 0,
            other: 73,
          },
          genderBreakdown: {
            male: 25,
            female: 82,
          },
          graduationYears: {},
        },
        "2024": {
          total: 101,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 29,
            cuti: 0,
            other: 72,
          },
          genderBreakdown: {
            male: 33,
            female: 68,
          },
          graduationYears: {},
        },
      },
    },
    "106": {
      prodiCode: "106",
      prodiName: "Biologi",
      total: 979,
      statusBreakdown: {
        lulus: 578,
        undurDiri: 21,
        dikeluarkan: 10,
        aktif: 46,
        cuti: 1,
        other: 323,
      },
      genderBreakdown: {
        male: 310,
        female: 669,
      },
      byBatch: {
        "2004": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 3,
          },
          graduationYears: {},
        },
        "2010": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "7": 1,
          },
        },
        "2011": {
          total: 7,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 4,
          },
          graduationYears: {
            "6": 6,
            "7": 1,
          },
        },
        "2012": {
          total: 10,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 8,
          },
          graduationYears: {
            "5": 5,
            "6": 3,
          },
        },
        "2013": {
          total: 71,
          statusBreakdown: {
            lulus: 68,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 21,
            female: 50,
          },
          graduationYears: {
            "4": 43,
            "5": 21,
            "6": 3,
            "7": 1,
          },
        },
        "2014": {
          total: 76,
          statusBreakdown: {
            lulus: 74,
            undurDiri: 0,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 28,
            female: 48,
          },
          graduationYears: {
            "4": 51,
            "5": 17,
            "6": 4,
            "7": 2,
          },
        },
        "2015": {
          total: 76,
          statusBreakdown: {
            lulus: 73,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 20,
            female: 56,
          },
          graduationYears: {
            "4": 53,
            "5": 14,
            "6": 3,
            "7": 3,
          },
        },
        "2016": {
          total: 79,
          statusBreakdown: {
            lulus: 76,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 31,
            female: 48,
          },
          graduationYears: {
            "4": 36,
            "5": 32,
            "6": 7,
            "7": 1,
          },
        },
        "2017": {
          total: 77,
          statusBreakdown: {
            lulus: 69,
            undurDiri: 3,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 25,
            female: 52,
          },
          graduationYears: {
            "4": 45,
            "5": 18,
            "6": 3,
            "7": 3,
          },
        },
        "2018": {
          total: 77,
          statusBreakdown: {
            lulus: 71,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 2,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 29,
            female: 48,
          },
          graduationYears: {
            "4": 53,
            "5": 17,
            "6": 1,
          },
        },
        "2019": {
          total: 88,
          statusBreakdown: {
            lulus: 72,
            undurDiri: 5,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 11,
          },
          genderBreakdown: {
            male: 36,
            female: 52,
          },
          graduationYears: {
            "4": 65,
            "5": 7,
          },
        },
        "2020": {
          total: 61,
          statusBreakdown: {
            lulus: 47,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 14,
          },
          genderBreakdown: {
            male: 16,
            female: 45,
          },
          graduationYears: {
            "4": 40,
            "5": 7,
          },
        },
        "2021": {
          total: 62,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 0,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 51,
          },
          genderBreakdown: {
            male: 15,
            female: 47,
          },
          graduationYears: {
            "4": 9,
          },
        },
        "2022": {
          total: 91,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 8,
            cuti: 0,
            other: 83,
          },
          genderBreakdown: {
            male: 22,
            female: 69,
          },
          graduationYears: {},
        },
        "2023": {
          total: 96,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 12,
            cuti: 1,
            other: 81,
          },
          genderBreakdown: {
            male: 25,
            female: 71,
          },
          graduationYears: {},
        },
        "2024": {
          total: 104,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 24,
            cuti: 0,
            other: 80,
          },
          genderBreakdown: {
            male: 36,
            female: 68,
          },
          graduationYears: {},
        },
      },
    },
    "107": {
      prodiCode: "107",
      prodiName: "Sains dan Teknologi Farmasi",
      total: 1304,
      statusBreakdown: {
        lulus: 915,
        undurDiri: 13,
        dikeluarkan: 7,
        aktif: 22,
        cuti: 0,
        other: 347,
      },
      genderBreakdown: {
        male: 219,
        female: 1085,
      },
      byBatch: {
        "2010": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 2,
          },
          graduationYears: {
            "4": 2,
          },
        },
        "2011": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2012": {
          total: 10,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 5,
          },
          graduationYears: {
            "5": 8,
            "7": 1,
          },
        },
        "2013": {
          total: 98,
          statusBreakdown: {
            lulus: 98,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 20,
            female: 78,
          },
          graduationYears: {
            "4": 82,
            "5": 12,
            "6": 2,
            "7": 2,
          },
        },
        "2014": {
          total: 100,
          statusBreakdown: {
            lulus: 100,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 20,
            female: 80,
          },
          graduationYears: {
            "4": 95,
            "5": 4,
            "6": 1,
          },
        },
        "2015": {
          total: 98,
          statusBreakdown: {
            lulus: 98,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 20,
            female: 78,
          },
          graduationYears: {
            "4": 87,
            "5": 10,
            "6": 1,
          },
        },
        "2016": {
          total: 103,
          statusBreakdown: {
            lulus: 100,
            undurDiri: 0,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 15,
            female: 88,
          },
          graduationYears: {
            "4": 91,
            "5": 4,
            "6": 4,
            "7": 1,
          },
        },
        "2017": {
          total: 118,
          statusBreakdown: {
            lulus: 115,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 21,
            female: 97,
          },
          graduationYears: {
            "4": 109,
            "5": 6,
          },
        },
        "2018": {
          total: 106,
          statusBreakdown: {
            lulus: 103,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 14,
            female: 92,
          },
          graduationYears: {
            "4": 89,
            "5": 13,
            "6": 1,
          },
        },
        "2019": {
          total: 120,
          statusBreakdown: {
            lulus: 119,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 19,
            female: 101,
          },
          graduationYears: {
            "4": 116,
            "5": 3,
          },
        },
        "2020": {
          total: 118,
          statusBreakdown: {
            lulus: 112,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 19,
            female: 99,
          },
          graduationYears: {
            "4": 111,
            "5": 1,
          },
        },
        "2021": {
          total: 100,
          statusBreakdown: {
            lulus: 59,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 41,
          },
          genderBreakdown: {
            male: 16,
            female: 84,
          },
          graduationYears: {
            "4": 59,
          },
        },
        "2022": {
          total: 109,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 4,
            dikeluarkan: 2,
            aktif: 9,
            cuti: 0,
            other: 94,
          },
          genderBreakdown: {
            male: 13,
            female: 96,
          },
          graduationYears: {},
        },
        "2023": {
          total: 112,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 9,
            cuti: 0,
            other: 103,
          },
          genderBreakdown: {
            male: 23,
            female: 89,
          },
          graduationYears: {},
        },
        "2024": {
          total: 109,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 106,
          },
          genderBreakdown: {
            male: 14,
            female: 95,
          },
          graduationYears: {},
        },
      },
    },
    "108": {
      prodiCode: "108",
      prodiName: "Aktuaria",
      total: 374,
      statusBreakdown: {
        lulus: 174,
        undurDiri: 1,
        dikeluarkan: 0,
        aktif: 13,
        cuti: 0,
        other: 186,
      },
      genderBreakdown: {
        male: 201,
        female: 173,
      },
      byBatch: {
        "2018": {
          total: 50,
          statusBreakdown: {
            lulus: 50,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 23,
            female: 27,
          },
          graduationYears: {
            "4": 38,
            "5": 11,
            "6": 1,
          },
        },
        "2019": {
          total: 51,
          statusBreakdown: {
            lulus: 49,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 32,
            female: 19,
          },
          graduationYears: {
            "4": 48,
            "5": 1,
          },
        },
        "2020": {
          total: 53,
          statusBreakdown: {
            lulus: 47,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 29,
            female: 24,
          },
          graduationYears: {
            "4": 43,
            "5": 4,
          },
        },
        "2021": {
          total: 50,
          statusBreakdown: {
            lulus: 28,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 22,
          },
          genderBreakdown: {
            male: 23,
            female: 27,
          },
          graduationYears: {
            "4": 28,
          },
        },
        "2022": {
          total: 50,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 47,
          },
          genderBreakdown: {
            male: 24,
            female: 26,
          },
          graduationYears: {},
        },
        "2023": {
          total: 60,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 6,
            cuti: 0,
            other: 54,
          },
          genderBreakdown: {
            male: 37,
            female: 23,
          },
          graduationYears: {},
        },
        "2024": {
          total: 60,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 4,
            cuti: 0,
            other: 56,
          },
          genderBreakdown: {
            male: 33,
            female: 27,
          },
          graduationYears: {},
        },
      },
    },
    "112": {
      prodiCode: "112",
      prodiName: "Rekayasa Hayati",
      total: 553,
      statusBreakdown: {
        lulus: 341,
        undurDiri: 9,
        dikeluarkan: 8,
        aktif: 19,
        cuti: 0,
        other: 176,
      },
      genderBreakdown: {
        male: 208,
        female: 345,
      },
      byBatch: {
        "2002": {
          total: 15,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 15,
          },
          genderBreakdown: {
            male: 0,
            female: 15,
          },
          graduationYears: {},
        },
        "2012": {
          total: 2,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 0,
          },
          graduationYears: {
            "5": 1,
          },
        },
        "2013": {
          total: 40,
          statusBreakdown: {
            lulus: 40,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 19,
            female: 21,
          },
          graduationYears: {
            "4": 32,
            "5": 7,
            "6": 1,
          },
        },
        "2014": {
          total: 37,
          statusBreakdown: {
            lulus: 37,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 15,
            female: 22,
          },
          graduationYears: {
            "4": 32,
            "5": 5,
          },
        },
        "2015": {
          total: 40,
          statusBreakdown: {
            lulus: 40,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 16,
            female: 24,
          },
          graduationYears: {
            "4": 39,
            "6": 1,
          },
        },
        "2016": {
          total: 40,
          statusBreakdown: {
            lulus: 34,
            undurDiri: 2,
            dikeluarkan: 4,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 18,
            female: 22,
          },
          graduationYears: {
            "4": 21,
            "5": 13,
          },
        },
        "2017": {
          total: 41,
          statusBreakdown: {
            lulus: 38,
            undurDiri: 0,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 18,
            female: 23,
          },
          graduationYears: {
            "4": 20,
            "5": 18,
          },
        },
        "2018": {
          total: 41,
          statusBreakdown: {
            lulus: 40,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 15,
            female: 26,
          },
          graduationYears: {
            "4": 36,
            "5": 4,
          },
        },
        "2019": {
          total: 52,
          statusBreakdown: {
            lulus: 48,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 13,
            female: 39,
          },
          graduationYears: {
            "4": 46,
            "5": 2,
          },
        },
        "2020": {
          total: 46,
          statusBreakdown: {
            lulus: 42,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 16,
            female: 30,
          },
          graduationYears: {
            "4": 42,
          },
        },
        "2021": {
          total: 49,
          statusBreakdown: {
            lulus: 21,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 27,
          },
          genderBreakdown: {
            male: 18,
            female: 31,
          },
          graduationYears: {
            "4": 21,
          },
        },
        "2022": {
          total: 48,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 8,
            cuti: 0,
            other: 40,
          },
          genderBreakdown: {
            male: 25,
            female: 23,
          },
          graduationYears: {},
        },
        "2023": {
          total: 54,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 8,
            cuti: 0,
            other: 45,
          },
          genderBreakdown: {
            male: 10,
            female: 44,
          },
          graduationYears: {},
        },
        "2024": {
          total: 48,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 45,
          },
          genderBreakdown: {
            male: 23,
            female: 25,
          },
          graduationYears: {},
        },
      },
    },
    "114": {
      prodiCode: "114",
      prodiName: "Rekayasa Pertanian",
      total: 749,
      statusBreakdown: {
        lulus: 439,
        undurDiri: 14,
        dikeluarkan: 11,
        aktif: 40,
        cuti: 0,
        other: 245,
      },
      genderBreakdown: {
        male: 266,
        female: 483,
      },
      byBatch: {
        "2012": {
          total: 2,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2013": {
          total: 58,
          statusBreakdown: {
            lulus: 58,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 18,
            female: 40,
          },
          graduationYears: {
            "4": 47,
            "5": 6,
            "6": 4,
            "7": 1,
          },
        },
        "2014": {
          total: 58,
          statusBreakdown: {
            lulus: 57,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 19,
            female: 39,
          },
          graduationYears: {
            "4": 54,
            "5": 2,
            "6": 1,
          },
        },
        "2015": {
          total: 53,
          statusBreakdown: {
            lulus: 49,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 25,
            female: 28,
          },
          graduationYears: {
            "4": 39,
            "5": 9,
            "7": 1,
          },
        },
        "2016": {
          total: 58,
          statusBreakdown: {
            lulus: 54,
            undurDiri: 2,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 23,
            female: 35,
          },
          graduationYears: {
            "4": 44,
            "5": 9,
            "6": 1,
          },
        },
        "2017": {
          total: 59,
          statusBreakdown: {
            lulus: 59,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 17,
            female: 42,
          },
          graduationYears: {
            "4": 55,
            "5": 1,
            "6": 1,
            "7": 2,
          },
        },
        "2018": {
          total: 50,
          statusBreakdown: {
            lulus: 41,
            undurDiri: 3,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 21,
            female: 29,
          },
          graduationYears: {
            "4": 33,
            "5": 6,
            "6": 2,
          },
        },
        "2019": {
          total: 56,
          statusBreakdown: {
            lulus: 49,
            undurDiri: 4,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 23,
            female: 33,
          },
          graduationYears: {
            "4": 41,
            "5": 8,
          },
        },
        "2020": {
          total: 50,
          statusBreakdown: {
            lulus: 47,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 17,
            female: 33,
          },
          graduationYears: {
            "4": 47,
          },
        },
        "2021": {
          total: 75,
          statusBreakdown: {
            lulus: 24,
            undurDiri: 1,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 48,
          },
          genderBreakdown: {
            male: 21,
            female: 54,
          },
          graduationYears: {
            "4": 24,
          },
        },
        "2022": {
          total: 78,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 2,
            aktif: 16,
            cuti: 0,
            other: 60,
          },
          genderBreakdown: {
            male: 29,
            female: 49,
          },
          graduationYears: {},
        },
        "2023": {
          total: 87,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 15,
            cuti: 0,
            other: 72,
          },
          genderBreakdown: {
            male: 26,
            female: 61,
          },
          graduationYears: {},
        },
        "2024": {
          total: 64,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 9,
            cuti: 0,
            other: 55,
          },
          genderBreakdown: {
            male: 26,
            female: 38,
          },
          graduationYears: {},
        },
        "2042": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
      },
    },
    "115": {
      prodiCode: "115",
      prodiName: "Rekayasa Kehutanan",
      total: 674,
      statusBreakdown: {
        lulus: 396,
        undurDiri: 15,
        dikeluarkan: 8,
        aktif: 47,
        cuti: 0,
        other: 208,
      },
      genderBreakdown: {
        male: 250,
        female: 424,
      },
      byBatch: {
        "2012": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 0,
          },
          graduationYears: {
            "6": 2,
            "7": 1,
          },
        },
        "2013": {
          total: 44,
          statusBreakdown: {
            lulus: 44,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 22,
            female: 22,
          },
          graduationYears: {
            "4": 35,
            "5": 5,
            "6": 4,
          },
        },
        "2014": {
          total: 53,
          statusBreakdown: {
            lulus: 53,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 17,
            female: 36,
          },
          graduationYears: {
            "4": 47,
            "5": 6,
          },
        },
        "2015": {
          total: 46,
          statusBreakdown: {
            lulus: 42,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 23,
            female: 23,
          },
          graduationYears: {
            "4": 34,
            "5": 8,
          },
        },
        "2016": {
          total: 51,
          statusBreakdown: {
            lulus: 48,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 20,
            female: 31,
          },
          graduationYears: {
            "4": 40,
            "5": 8,
          },
        },
        "2017": {
          total: 45,
          statusBreakdown: {
            lulus: 42,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 16,
            female: 29,
          },
          graduationYears: {
            "4": 31,
            "5": 9,
            "6": 2,
          },
        },
        "2018": {
          total: 56,
          statusBreakdown: {
            lulus: 54,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 17,
            female: 39,
          },
          graduationYears: {
            "4": 43,
            "5": 10,
            "6": 1,
          },
        },
        "2019": {
          total: 52,
          statusBreakdown: {
            lulus: 45,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 20,
            female: 32,
          },
          graduationYears: {
            "4": 45,
          },
        },
        "2020": {
          total: 47,
          statusBreakdown: {
            lulus: 40,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 24,
            female: 23,
          },
          graduationYears: {
            "4": 37,
            "5": 3,
          },
        },
        "2021": {
          total: 63,
          statusBreakdown: {
            lulus: 25,
            undurDiri: 0,
            dikeluarkan: 4,
            aktif: 0,
            cuti: 0,
            other: 34,
          },
          genderBreakdown: {
            male: 21,
            female: 42,
          },
          graduationYears: {
            "4": 25,
          },
        },
        "2022": {
          total: 66,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 2,
            aktif: 11,
            cuti: 0,
            other: 52,
          },
          genderBreakdown: {
            male: 23,
            female: 43,
          },
          graduationYears: {},
        },
        "2023": {
          total: 88,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 22,
            cuti: 0,
            other: 66,
          },
          genderBreakdown: {
            male: 22,
            female: 66,
          },
          graduationYears: {},
        },
        "2024": {
          total: 60,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 14,
            cuti: 0,
            other: 46,
          },
          genderBreakdown: {
            male: 22,
            female: 38,
          },
          graduationYears: {},
        },
      },
    },
    "116": {
      prodiCode: "116",
      prodiName: "Farmasi Klinik dan Komunitas",
      total: 536,
      statusBreakdown: {
        lulus: 381,
        undurDiri: 13,
        dikeluarkan: 0,
        aktif: 17,
        cuti: 0,
        other: 125,
      },
      genderBreakdown: {
        male: 72,
        female: 464,
      },
      byBatch: {
        "2011": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "6": 1,
          },
        },
        "2012": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {
            "5": 1,
            "6": 1,
          },
        },
        "2013": {
          total: 35,
          statusBreakdown: {
            lulus: 35,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 33,
          },
          graduationYears: {
            "4": 25,
            "5": 8,
            "6": 1,
            "7": 1,
          },
        },
        "2014": {
          total: 42,
          statusBreakdown: {
            lulus: 42,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 35,
          },
          graduationYears: {
            "4": 39,
            "5": 1,
            "6": 2,
          },
        },
        "2015": {
          total: 45,
          statusBreakdown: {
            lulus: 45,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 37,
          },
          graduationYears: {
            "3": 1,
            "4": 40,
            "5": 2,
            "6": 1,
            "7": 1,
          },
        },
        "2016": {
          total: 50,
          statusBreakdown: {
            lulus: 49,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 44,
          },
          graduationYears: {
            "3": 1,
            "4": 42,
            "5": 2,
            "6": 4,
          },
        },
        "2017": {
          total: 55,
          statusBreakdown: {
            lulus: 51,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 11,
            female: 44,
          },
          graduationYears: {
            "3": 3,
            "4": 38,
            "5": 8,
            "6": 2,
          },
        },
        "2018": {
          total: 53,
          statusBreakdown: {
            lulus: 52,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 45,
          },
          graduationYears: {
            "3": 1,
            "4": 38,
            "5": 12,
            "6": 1,
          },
        },
        "2019": {
          total: 54,
          statusBreakdown: {
            lulus: 51,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 9,
            female: 45,
          },
          graduationYears: {
            "3": 1,
            "4": 49,
            "5": 1,
          },
        },
        "2020": {
          total: 33,
          statusBreakdown: {
            lulus: 27,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 3,
            female: 30,
          },
          graduationYears: {
            "4": 26,
            "5": 1,
          },
        },
        "2021": {
          total: 41,
          statusBreakdown: {
            lulus: 26,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 15,
          },
          genderBreakdown: {
            male: 6,
            female: 35,
          },
          graduationYears: {
            "4": 26,
          },
        },
        "2022": {
          total: 40,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 4,
            cuti: 0,
            other: 34,
          },
          genderBreakdown: {
            male: 4,
            female: 36,
          },
          graduationYears: {},
        },
        "2023": {
          total: 44,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 5,
            cuti: 0,
            other: 39,
          },
          genderBreakdown: {
            male: 4,
            female: 40,
          },
          graduationYears: {},
        },
        "2024": {
          total: 41,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 8,
            cuti: 0,
            other: 33,
          },
          genderBreakdown: {
            male: 3,
            female: 38,
          },
          graduationYears: {},
        },
      },
    },
    "119": {
      prodiCode: "119",
      prodiName: "Teknologi Pasca Panen",
      total: 504,
      statusBreakdown: {
        lulus: 263,
        undurDiri: 6,
        dikeluarkan: 5,
        aktif: 42,
        cuti: 0,
        other: 188,
      },
      genderBreakdown: {
        male: 135,
        female: 369,
      },
      byBatch: {
        "2015": {
          total: 38,
          statusBreakdown: {
            lulus: 37,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 10,
            female: 28,
          },
          graduationYears: {
            "4": 27,
            "5": 9,
            "6": 1,
          },
        },
        "2016": {
          total: 33,
          statusBreakdown: {
            lulus: 30,
            undurDiri: 1,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 9,
            female: 24,
          },
          graduationYears: {
            "4": 20,
            "5": 9,
            "6": 1,
          },
        },
        "2017": {
          total: 38,
          statusBreakdown: {
            lulus: 37,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 12,
            female: 26,
          },
          graduationYears: {
            "4": 36,
            "5": 1,
          },
        },
        "2018": {
          total: 41,
          statusBreakdown: {
            lulus: 40,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 16,
            female: 25,
          },
          graduationYears: {
            "4": 37,
            "5": 1,
            "6": 2,
          },
        },
        "2019": {
          total: 52,
          statusBreakdown: {
            lulus: 49,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 16,
            female: 36,
          },
          graduationYears: {
            "4": 45,
            "5": 2,
            "6": 2,
          },
        },
        "2020": {
          total: 34,
          statusBreakdown: {
            lulus: 33,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 11,
            female: 23,
          },
          graduationYears: {
            "4": 33,
          },
        },
        "2021": {
          total: 50,
          statusBreakdown: {
            lulus: 37,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 12,
          },
          genderBreakdown: {
            male: 12,
            female: 38,
          },
          graduationYears: {
            "4": 37,
          },
        },
        "2022": {
          total: 70,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 11,
            cuti: 0,
            other: 58,
          },
          genderBreakdown: {
            male: 19,
            female: 51,
          },
          graduationYears: {},
        },
        "2023": {
          total: 84,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 20,
            cuti: 0,
            other: 64,
          },
          genderBreakdown: {
            male: 18,
            female: 66,
          },
          graduationYears: {},
        },
        "2024": {
          total: 64,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 11,
            cuti: 0,
            other: 53,
          },
          genderBreakdown: {
            male: 12,
            female: 52,
          },
          graduationYears: {},
        },
      },
    },
    "120": {
      prodiCode: "120",
      prodiName: "Teknik Geologi",
      total: 1083,
      statusBreakdown: {
        lulus: 644,
        undurDiri: 7,
        dikeluarkan: 2,
        aktif: 53,
        cuti: 1,
        other: 376,
      },
      genderBreakdown: {
        male: 738,
        female: 345,
      },
      byBatch: {
        "2007": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2009": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2011": {
          total: 5,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 4,
          },
          graduationYears: {
            "6": 5,
          },
        },
        "2012": {
          total: 10,
          statusBreakdown: {
            lulus: 10,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 2,
          },
          graduationYears: {
            "4": 1,
            "5": 4,
            "6": 4,
            "7": 1,
          },
        },
        "2013": {
          total: 81,
          statusBreakdown: {
            lulus: 81,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 60,
            female: 21,
          },
          graduationYears: {
            "4": 35,
            "5": 36,
            "6": 5,
            "7": 5,
          },
        },
        "2014": {
          total: 88,
          statusBreakdown: {
            lulus: 88,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 67,
            female: 21,
          },
          graduationYears: {
            "4": 43,
            "5": 35,
            "6": 8,
            "7": 2,
          },
        },
        "2015": {
          total: 80,
          statusBreakdown: {
            lulus: 79,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 59,
            female: 21,
          },
          graduationYears: {
            "4": 47,
            "5": 19,
            "6": 5,
            "7": 8,
          },
        },
        "2016": {
          total: 81,
          statusBreakdown: {
            lulus: 77,
            undurDiri: 1,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 65,
            female: 16,
          },
          graduationYears: {
            "3": 1,
            "4": 28,
            "5": 34,
            "6": 5,
            "7": 9,
          },
        },
        "2017": {
          total: 81,
          statusBreakdown: {
            lulus: 81,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 63,
            female: 18,
          },
          graduationYears: {
            "4": 16,
            "5": 46,
            "6": 15,
            "7": 4,
          },
        },
        "2018": {
          total: 81,
          statusBreakdown: {
            lulus: 79,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 58,
            female: 23,
          },
          graduationYears: {
            "4": 45,
            "5": 27,
            "6": 3,
            "7": 4,
          },
        },
        "2019": {
          total: 81,
          statusBreakdown: {
            lulus: 72,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 7,
          },
          genderBreakdown: {
            male: 64,
            female: 17,
          },
          graduationYears: {
            "4": 65,
            "5": 7,
          },
        },
        "2020": {
          total: 72,
          statusBreakdown: {
            lulus: 67,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 56,
            female: 16,
          },
          graduationYears: {
            "4": 66,
            "5": 1,
          },
        },
        "2021": {
          total: 73,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 69,
          },
          genderBreakdown: {
            male: 48,
            female: 25,
          },
          graduationYears: {
            "3": 3,
          },
        },
        "2022": {
          total: 129,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 17,
            cuti: 0,
            other: 112,
          },
          genderBreakdown: {
            male: 65,
            female: 64,
          },
          graduationYears: {},
        },
        "2023": {
          total: 113,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 16,
            cuti: 0,
            other: 97,
          },
          genderBreakdown: {
            male: 52,
            female: 61,
          },
          graduationYears: {},
        },
        "2024": {
          total: 106,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 20,
            cuti: 1,
            other: 85,
          },
          genderBreakdown: {
            male: 71,
            female: 35,
          },
          graduationYears: {},
        },
      },
    },
    "121": {
      prodiCode: "121",
      prodiName: "Teknik Pertambangan",
      total: 1290,
      statusBreakdown: {
        lulus: 765,
        undurDiri: 10,
        dikeluarkan: 6,
        aktif: 58,
        cuti: 0,
        other: 451,
      },
      genderBreakdown: {
        male: 973,
        female: 317,
      },
      byBatch: {
        "1991": {
          total: 2,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {},
        },
        "1997": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2000": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2012": {
          total: 6,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 0,
          },
          graduationYears: {
            "4": 1,
            "5": 3,
            "6": 2,
          },
        },
        "2013": {
          total: 92,
          statusBreakdown: {
            lulus: 90,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 77,
            female: 15,
          },
          graduationYears: {
            "4": 65,
            "5": 19,
            "6": 3,
            "7": 2,
            "8": 1,
          },
        },
        "2014": {
          total: 96,
          statusBreakdown: {
            lulus: 95,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 68,
            female: 28,
          },
          graduationYears: {
            "4": 76,
            "5": 12,
            "6": 6,
            "7": 1,
          },
        },
        "2015": {
          total: 87,
          statusBreakdown: {
            lulus: 83,
            undurDiri: 3,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 65,
            female: 22,
          },
          graduationYears: {
            "4": 66,
            "5": 13,
            "6": 3,
            "7": 1,
          },
        },
        "2016": {
          total: 86,
          statusBreakdown: {
            lulus: 83,
            undurDiri: 1,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 71,
            female: 15,
          },
          graduationYears: {
            "4": 60,
            "5": 19,
            "6": 2,
            "7": 2,
          },
        },
        "2017": {
          total: 87,
          statusBreakdown: {
            lulus: 87,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 68,
            female: 19,
          },
          graduationYears: {
            "4": 70,
            "5": 15,
            "6": 1,
            "7": 1,
          },
        },
        "2018": {
          total: 88,
          statusBreakdown: {
            lulus: 85,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 65,
            female: 23,
          },
          graduationYears: {
            "4": 73,
            "5": 12,
          },
        },
        "2019": {
          total: 91,
          statusBreakdown: {
            lulus: 86,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 70,
            female: 21,
          },
          graduationYears: {
            "4": 78,
            "5": 7,
            "6": 1,
          },
        },
        "2020": {
          total: 138,
          statusBreakdown: {
            lulus: 134,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 104,
            female: 34,
          },
          graduationYears: {
            "4": 129,
            "5": 5,
          },
        },
        "2021": {
          total: 119,
          statusBreakdown: {
            lulus: 13,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 105,
          },
          genderBreakdown: {
            male: 88,
            female: 31,
          },
          graduationYears: {
            "4": 13,
          },
        },
        "2022": {
          total: 134,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 23,
            cuti: 0,
            other: 111,
          },
          genderBreakdown: {
            male: 92,
            female: 42,
          },
          graduationYears: {},
        },
        "2023": {
          total: 136,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 15,
            cuti: 0,
            other: 121,
          },
          genderBreakdown: {
            male: 104,
            female: 32,
          },
          graduationYears: {},
        },
        "2024": {
          total: 126,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 20,
            cuti: 0,
            other: 106,
          },
          genderBreakdown: {
            male: 92,
            female: 34,
          },
          graduationYears: {},
        },
      },
    },
    "122": {
      prodiCode: "122",
      prodiName: "Teknik Perminyakan",
      total: 1420,
      statusBreakdown: {
        lulus: 883,
        undurDiri: 17,
        dikeluarkan: 9,
        aktif: 48,
        cuti: 0,
        other: 463,
      },
      genderBreakdown: {
        male: 1078,
        female: 342,
      },
      byBatch: {
        "2001": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2007": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2009": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2010": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2011": {
          total: 7,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 0,
          },
          graduationYears: {
            "4": 1,
            "6": 5,
          },
        },
        "2012": {
          total: 5,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 0,
          },
          graduationYears: {
            "5": 4,
            "6": 1,
          },
        },
        "2013": {
          total: 100,
          statusBreakdown: {
            lulus: 100,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 89,
            female: 11,
          },
          graduationYears: {
            "4": 98,
            "5": 1,
            "7": 1,
          },
        },
        "2014": {
          total: 99,
          statusBreakdown: {
            lulus: 99,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 82,
            female: 17,
          },
          graduationYears: {
            "4": 94,
            "5": 5,
          },
        },
        "2015": {
          total: 104,
          statusBreakdown: {
            lulus: 102,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 86,
            female: 18,
          },
          graduationYears: {
            "4": 98,
            "5": 3,
            "6": 1,
          },
        },
        "2016": {
          total: 101,
          statusBreakdown: {
            lulus: 89,
            undurDiri: 6,
            dikeluarkan: 6,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 86,
            female: 15,
          },
          graduationYears: {
            "4": 78,
            "5": 6,
            "6": 5,
          },
        },
        "2017": {
          total: 99,
          statusBreakdown: {
            lulus: 97,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 74,
            female: 25,
          },
          graduationYears: {
            "3": 1,
            "4": 89,
            "5": 7,
          },
        },
        "2018": {
          total: 97,
          statusBreakdown: {
            lulus: 93,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 73,
            female: 24,
          },
          graduationYears: {
            "4": 87,
            "5": 4,
            "6": 2,
          },
        },
        "2019": {
          total: 101,
          statusBreakdown: {
            lulus: 98,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 67,
            female: 34,
          },
          graduationYears: {
            "3": 1,
            "4": 94,
            "5": 2,
            "6": 1,
          },
        },
        "2020": {
          total: 151,
          statusBreakdown: {
            lulus: 141,
            undurDiri: 4,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 103,
            female: 48,
          },
          graduationYears: {
            "4": 136,
            "5": 5,
          },
        },
        "2021": {
          total: 127,
          statusBreakdown: {
            lulus: 49,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 76,
          },
          genderBreakdown: {
            male: 92,
            female: 35,
          },
          graduationYears: {
            "4": 49,
          },
        },
        "2022": {
          total: 148,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 14,
            cuti: 0,
            other: 134,
          },
          genderBreakdown: {
            male: 110,
            female: 38,
          },
          graduationYears: {},
        },
        "2023": {
          total: 140,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 10,
            cuti: 0,
            other: 130,
          },
          genderBreakdown: {
            male: 100,
            female: 40,
          },
          graduationYears: {},
        },
        "2024": {
          total: 137,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 24,
            cuti: 0,
            other: 113,
          },
          genderBreakdown: {
            male: 100,
            female: 37,
          },
          graduationYears: {},
        },
      },
    },
    "123": {
      prodiCode: "123",
      prodiName: "Teknik Geofisika",
      total: 1006,
      statusBreakdown: {
        lulus: 547,
        undurDiri: 29,
        dikeluarkan: 18,
        aktif: 49,
        cuti: 0,
        other: 363,
      },
      genderBreakdown: {
        male: 683,
        female: 323,
      },
      byBatch: {
        "2011": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 0,
          },
          graduationYears: {
            "6": 2,
          },
        },
        "2012": {
          total: 6,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 0,
          },
          graduationYears: {
            "5": 1,
            "6": 2,
          },
        },
        "2013": {
          total: 78,
          statusBreakdown: {
            lulus: 78,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 56,
            female: 22,
          },
          graduationYears: {
            "4": 48,
            "5": 23,
            "6": 6,
            "7": 1,
          },
        },
        "2014": {
          total: 70,
          statusBreakdown: {
            lulus: 70,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 47,
            female: 23,
          },
          graduationYears: {
            "4": 59,
            "5": 11,
          },
        },
        "2015": {
          total: 73,
          statusBreakdown: {
            lulus: 72,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 54,
            female: 19,
          },
          graduationYears: {
            "4": 58,
            "5": 12,
            "6": 1,
            "7": 1,
          },
        },
        "2016": {
          total: 59,
          statusBreakdown: {
            lulus: 49,
            undurDiri: 4,
            dikeluarkan: 6,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 40,
            female: 19,
          },
          graduationYears: {
            "4": 10,
            "5": 33,
            "6": 2,
            "7": 4,
          },
        },
        "2017": {
          total: 72,
          statusBreakdown: {
            lulus: 63,
            undurDiri: 3,
            dikeluarkan: 6,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 54,
            female: 18,
          },
          graduationYears: {
            "4": 29,
            "5": 25,
            "6": 4,
            "7": 5,
          },
        },
        "2018": {
          total: 71,
          statusBreakdown: {
            lulus: 63,
            undurDiri: 3,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 55,
            female: 16,
          },
          graduationYears: {
            "3": 1,
            "4": 41,
            "5": 14,
            "6": 5,
            "7": 2,
          },
        },
        "2019": {
          total: 111,
          statusBreakdown: {
            lulus: 89,
            undurDiri: 7,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 15,
          },
          genderBreakdown: {
            male: 77,
            female: 34,
          },
          graduationYears: {
            "4": 62,
            "5": 25,
            "6": 2,
          },
        },
        "2020": {
          total: 74,
          statusBreakdown: {
            lulus: 51,
            undurDiri: 4,
            dikeluarkan: 2,
            aktif: 3,
            cuti: 0,
            other: 14,
          },
          genderBreakdown: {
            male: 49,
            female: 25,
          },
          graduationYears: {
            "4": 39,
            "5": 12,
          },
        },
        "2021": {
          total: 95,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 88,
          },
          genderBreakdown: {
            male: 65,
            female: 30,
          },
          graduationYears: {
            "4": 7,
          },
        },
        "2022": {
          total: 104,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 23,
            cuti: 0,
            other: 78,
          },
          genderBreakdown: {
            male: 64,
            female: 40,
          },
          graduationYears: {},
        },
        "2023": {
          total: 86,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 11,
            cuti: 0,
            other: 73,
          },
          genderBreakdown: {
            male: 53,
            female: 33,
          },
          graduationYears: {},
        },
        "2024": {
          total: 105,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 12,
            cuti: 0,
            other: 93,
          },
          genderBreakdown: {
            male: 61,
            female: 44,
          },
          graduationYears: {},
        },
      },
    },
    "124": {
      prodiCode: "124",
      prodiName: "Geofisika",
      total: 1,
      statusBreakdown: {
        lulus: 1,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 1,
        female: 0,
      },
      byBatch: {
        "2004": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
      },
    },
    "125": {
      prodiCode: "125",
      prodiName: "Teknik Metalurgi",
      total: 935,
      statusBreakdown: {
        lulus: 591,
        undurDiri: 6,
        dikeluarkan: 2,
        aktif: 41,
        cuti: 1,
        other: 294,
      },
      genderBreakdown: {
        male: 701,
        female: 234,
      },
      byBatch: {
        "2010": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2011": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "6": 1,
          },
        },
        "2012": {
          total: 9,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 1,
          },
          graduationYears: {
            "5": 5,
            "6": 4,
          },
        },
        "2013": {
          total: 54,
          statusBreakdown: {
            lulus: 51,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 39,
            female: 15,
          },
          graduationYears: {
            "4": 36,
            "5": 13,
            "6": 2,
          },
        },
        "2014": {
          total: 65,
          statusBreakdown: {
            lulus: 65,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 52,
            female: 13,
          },
          graduationYears: {
            "4": 56,
            "5": 6,
            "6": 3,
          },
        },
        "2015": {
          total: 75,
          statusBreakdown: {
            lulus: 74,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 53,
            female: 22,
          },
          graduationYears: {
            "4": 65,
            "5": 6,
            "6": 3,
          },
        },
        "2016": {
          total: 70,
          statusBreakdown: {
            lulus: 70,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 57,
            female: 13,
          },
          graduationYears: {
            "4": 51,
            "5": 11,
            "6": 7,
            "7": 1,
          },
        },
        "2017": {
          total: 68,
          statusBreakdown: {
            lulus: 67,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 53,
            female: 15,
          },
          graduationYears: {
            "4": 51,
            "5": 13,
            "6": 2,
            "7": 1,
          },
        },
        "2018": {
          total: 73,
          statusBreakdown: {
            lulus: 73,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 57,
            female: 16,
          },
          graduationYears: {
            "4": 58,
            "5": 14,
            "6": 1,
          },
        },
        "2019": {
          total: 80,
          statusBreakdown: {
            lulus: 78,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 63,
            female: 17,
          },
          graduationYears: {
            "4": 72,
            "5": 5,
            "6": 1,
          },
        },
        "2020": {
          total: 94,
          statusBreakdown: {
            lulus: 84,
            undurDiri: 3,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 72,
            female: 22,
          },
          graduationYears: {
            "3": 2,
            "4": 77,
            "5": 5,
          },
        },
        "2021": {
          total: 80,
          statusBreakdown: {
            lulus: 18,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 61,
          },
          genderBreakdown: {
            male: 59,
            female: 21,
          },
          graduationYears: {
            "4": 18,
          },
        },
        "2022": {
          total: 90,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 18,
            cuti: 0,
            other: 72,
          },
          genderBreakdown: {
            male: 62,
            female: 28,
          },
          graduationYears: {},
        },
        "2023": {
          total: 91,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 14,
            cuti: 0,
            other: 77,
          },
          genderBreakdown: {
            male: 62,
            female: 29,
          },
          graduationYears: {},
        },
        "2024": {
          total: 84,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 9,
            cuti: 1,
            other: 74,
          },
          genderBreakdown: {
            male: 62,
            female: 22,
          },
          graduationYears: {},
        },
      },
    },
    "128": {
      prodiCode: "128",
      prodiName: "Meteorologi",
      total: 584,
      statusBreakdown: {
        lulus: 325,
        undurDiri: 22,
        dikeluarkan: 6,
        aktif: 45,
        cuti: 0,
        other: 186,
      },
      genderBreakdown: {
        male: 254,
        female: 330,
      },
      byBatch: {
        "2003": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2009": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "6": 1,
          },
        },
        "2011": {
          total: 7,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 2,
          },
          graduationYears: {
            "4": 1,
            "6": 6,
          },
        },
        "2012": {
          total: 11,
          statusBreakdown: {
            lulus: 11,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 4,
          },
          graduationYears: {
            "4": 1,
            "5": 1,
            "6": 4,
            "7": 4,
          },
        },
        "2013": {
          total: 38,
          statusBreakdown: {
            lulus: 36,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 19,
            female: 19,
          },
          graduationYears: {
            "4": 18,
            "5": 14,
            "6": 3,
            "7": 1,
          },
        },
        "2014": {
          total: 31,
          statusBreakdown: {
            lulus: 31,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 23,
          },
          graduationYears: {
            "4": 14,
            "5": 13,
            "6": 3,
            "7": 1,
          },
        },
        "2015": {
          total: 32,
          statusBreakdown: {
            lulus: 31,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 17,
            female: 15,
          },
          graduationYears: {
            "4": 21,
            "5": 8,
            "6": 2,
          },
        },
        "2016": {
          total: 45,
          statusBreakdown: {
            lulus: 38,
            undurDiri: 5,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 23,
            female: 22,
          },
          graduationYears: {
            "4": 20,
            "5": 13,
            "6": 3,
            "7": 2,
          },
        },
        "2017": {
          total: 39,
          statusBreakdown: {
            lulus: 38,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 15,
            female: 24,
          },
          graduationYears: {
            "4": 13,
            "5": 16,
            "6": 9,
          },
        },
        "2018": {
          total: 41,
          statusBreakdown: {
            lulus: 37,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 19,
            female: 22,
          },
          graduationYears: {
            "4": 29,
            "5": 6,
            "6": 2,
          },
        },
        "2019": {
          total: 52,
          statusBreakdown: {
            lulus: 45,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 16,
            female: 36,
          },
          graduationYears: {
            "4": 39,
            "5": 5,
            "6": 1,
          },
        },
        "2020": {
          total: 43,
          statusBreakdown: {
            lulus: 36,
            undurDiri: 4,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 17,
            female: 26,
          },
          graduationYears: {
            "4": 36,
          },
        },
        "2021": {
          total: 45,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 29,
          },
          genderBreakdown: {
            male: 17,
            female: 28,
          },
          graduationYears: {
            "4": 14,
          },
        },
        "2022": {
          total: 60,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 2,
            aktif: 12,
            cuti: 0,
            other: 46,
          },
          genderBreakdown: {
            male: 28,
            female: 32,
          },
          graduationYears: {},
        },
        "2023": {
          total: 69,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 14,
            cuti: 0,
            other: 55,
          },
          genderBreakdown: {
            male: 31,
            female: 38,
          },
          graduationYears: {},
        },
        "2024": {
          total: 69,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 19,
            cuti: 0,
            other: 50,
          },
          genderBreakdown: {
            male: 31,
            female: 38,
          },
          graduationYears: {},
        },
      },
    },
    "129": {
      prodiCode: "129",
      prodiName: "Oseanografi",
      total: 806,
      statusBreakdown: {
        lulus: 331,
        undurDiri: 35,
        dikeluarkan: 11,
        aktif: 84,
        cuti: 0,
        other: 345,
      },
      genderBreakdown: {
        male: 450,
        female: 356,
      },
      byBatch: {
        "2004": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2008": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2011": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "5": 1,
          },
        },
        "2012": {
          total: 7,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 1,
          },
          graduationYears: {
            "5": 5,
            "6": 1,
            "7": 1,
          },
        },
        "2013": {
          total: 35,
          statusBreakdown: {
            lulus: 35,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 21,
            female: 14,
          },
          graduationYears: {
            "4": 19,
            "5": 14,
            "6": 1,
            "7": 1,
          },
        },
        "2014": {
          total: 40,
          statusBreakdown: {
            lulus: 39,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 28,
            female: 12,
          },
          graduationYears: {
            "4": 22,
            "5": 14,
            "6": 3,
          },
        },
        "2015": {
          total: 39,
          statusBreakdown: {
            lulus: 36,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 24,
            female: 15,
          },
          graduationYears: {
            "4": 16,
            "5": 12,
            "6": 2,
            "7": 6,
          },
        },
        "2016": {
          total: 40,
          statusBreakdown: {
            lulus: 32,
            undurDiri: 6,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 25,
            female: 15,
          },
          graduationYears: {
            "4": 9,
            "5": 17,
            "6": 2,
            "7": 4,
          },
        },
        "2017": {
          total: 40,
          statusBreakdown: {
            lulus: 37,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 25,
            female: 15,
          },
          graduationYears: {
            "4": 3,
            "5": 23,
            "6": 7,
            "7": 4,
          },
        },
        "2018": {
          total: 50,
          statusBreakdown: {
            lulus: 43,
            undurDiri: 5,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 31,
            female: 19,
          },
          graduationYears: {
            "4": 16,
            "5": 19,
            "6": 4,
            "7": 4,
          },
        },
        "2019": {
          total: 52,
          statusBreakdown: {
            lulus: 42,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 9,
          },
          genderBreakdown: {
            male: 30,
            female: 22,
          },
          graduationYears: {
            "4": 32,
            "5": 6,
            "6": 4,
          },
        },
        "2020": {
          total: 71,
          statusBreakdown: {
            lulus: 44,
            undurDiri: 11,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 14,
          },
          genderBreakdown: {
            male: 37,
            female: 34,
          },
          graduationYears: {
            "4": 41,
            "5": 3,
          },
        },
        "2021": {
          total: 71,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 1,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 53,
          },
          genderBreakdown: {
            male: 36,
            female: 35,
          },
          graduationYears: {
            "4": 14,
          },
        },
        "2022": {
          total: 124,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 2,
            dikeluarkan: 3,
            aktif: 39,
            cuti: 0,
            other: 80,
          },
          genderBreakdown: {
            male: 59,
            female: 65,
          },
          graduationYears: {},
        },
        "2023": {
          total: 119,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 24,
            cuti: 0,
            other: 93,
          },
          genderBreakdown: {
            male: 63,
            female: 56,
          },
          graduationYears: {},
        },
        "2024": {
          total: 115,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 21,
            cuti: 0,
            other: 94,
          },
          genderBreakdown: {
            male: 62,
            female: 53,
          },
          graduationYears: {},
        },
      },
    },
    "130": {
      prodiCode: "130",
      prodiName: "Teknik Kimia",
      total: 1511,
      statusBreakdown: {
        lulus: 954,
        undurDiri: 35,
        dikeluarkan: 1,
        aktif: 23,
        cuti: 1,
        other: 497,
      },
      genderBreakdown: {
        male: 890,
        female: 621,
      },
      byBatch: {
        "2003": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2011": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 2,
          },
          graduationYears: {
            "4": 1,
            "6": 1,
            "7": 1,
          },
        },
        "2012": {
          total: 8,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 2,
          },
          graduationYears: {
            "5": 4,
            "6": 3,
          },
        },
        "2013": {
          total: 113,
          statusBreakdown: {
            lulus: 113,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 73,
            female: 40,
          },
          graduationYears: {
            "4": 104,
            "5": 6,
            "6": 3,
          },
        },
        "2014": {
          total: 120,
          statusBreakdown: {
            lulus: 118,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 76,
            female: 44,
          },
          graduationYears: {
            "4": 102,
            "5": 13,
            "6": 3,
          },
        },
        "2015": {
          total: 101,
          statusBreakdown: {
            lulus: 101,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 70,
            female: 31,
          },
          graduationYears: {
            "4": 95,
            "5": 5,
            "6": 1,
          },
        },
        "2016": {
          total: 127,
          statusBreakdown: {
            lulus: 123,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 76,
            female: 51,
          },
          graduationYears: {
            "4": 106,
            "5": 17,
          },
        },
        "2017": {
          total: 119,
          statusBreakdown: {
            lulus: 116,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 75,
            female: 44,
          },
          graduationYears: {
            "4": 110,
            "5": 4,
            "6": 2,
          },
        },
        "2018": {
          total: 132,
          statusBreakdown: {
            lulus: 128,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 84,
            female: 48,
          },
          graduationYears: {
            "4": 118,
            "5": 7,
            "6": 3,
          },
        },
        "2019": {
          total: 117,
          statusBreakdown: {
            lulus: 107,
            undurDiri: 7,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 59,
            female: 58,
          },
          graduationYears: {
            "4": 100,
            "5": 6,
            "6": 1,
          },
        },
        "2020": {
          total: 133,
          statusBreakdown: {
            lulus: 113,
            undurDiri: 10,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 9,
          },
          genderBreakdown: {
            male: 78,
            female: 55,
          },
          graduationYears: {
            "4": 109,
            "5": 4,
          },
        },
        "2021": {
          total: 118,
          statusBreakdown: {
            lulus: 24,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 90,
          },
          genderBreakdown: {
            male: 71,
            female: 47,
          },
          graduationYears: {
            "4": 24,
          },
        },
        "2022": {
          total: 129,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 5,
            cuti: 1,
            other: 121,
          },
          genderBreakdown: {
            male: 73,
            female: 56,
          },
          graduationYears: {},
        },
        "2023": {
          total: 164,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 13,
            cuti: 0,
            other: 151,
          },
          genderBreakdown: {
            male: 83,
            female: 81,
          },
          graduationYears: {},
        },
        "2024": {
          total: 126,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 5,
            cuti: 0,
            other: 121,
          },
          genderBreakdown: {
            male: 64,
            female: 62,
          },
          graduationYears: {},
        },
      },
    },
    "131": {
      prodiCode: "131",
      prodiName: "Teknik Mesin",
      total: 2241,
      statusBreakdown: {
        lulus: 1320,
        undurDiri: 42,
        dikeluarkan: 18,
        aktif: 29,
        cuti: 0,
        other: 832,
      },
      genderBreakdown: {
        male: 1980,
        female: 261,
      },
      byBatch: {
        "2000": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2004": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2005": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2009": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2011": {
          total: 10,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 10,
            female: 0,
          },
          graduationYears: {
            "6": 5,
            "7": 2,
          },
        },
        "2012": {
          total: 15,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 15,
            female: 0,
          },
          graduationYears: {
            "4": 1,
            "5": 8,
            "6": 5,
          },
        },
        "2013": {
          total: 143,
          statusBreakdown: {
            lulus: 142,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 133,
            female: 10,
          },
          graduationYears: {
            "4": 101,
            "5": 35,
            "6": 6,
          },
        },
        "2014": {
          total: 150,
          statusBreakdown: {
            lulus: 150,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 143,
            female: 7,
          },
          graduationYears: {
            "4": 106,
            "5": 34,
            "6": 6,
            "7": 4,
          },
        },
        "2015": {
          total: 155,
          statusBreakdown: {
            lulus: 148,
            undurDiri: 6,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 141,
            female: 14,
          },
          graduationYears: {
            "4": 88,
            "5": 49,
            "6": 7,
            "7": 4,
          },
        },
        "2016": {
          total: 193,
          statusBreakdown: {
            lulus: 182,
            undurDiri: 9,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 171,
            female: 22,
          },
          graduationYears: {
            "4": 93,
            "5": 67,
            "6": 15,
            "7": 7,
          },
        },
        "2017": {
          total: 181,
          statusBreakdown: {
            lulus: 173,
            undurDiri: 4,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 165,
            female: 16,
          },
          graduationYears: {
            "4": 90,
            "5": 50,
            "6": 24,
            "7": 9,
          },
        },
        "2018": {
          total: 198,
          statusBreakdown: {
            lulus: 166,
            undurDiri: 6,
            dikeluarkan: 5,
            aktif: 0,
            cuti: 0,
            other: 21,
          },
          genderBreakdown: {
            male: 175,
            female: 23,
          },
          graduationYears: {
            "4": 80,
            "5": 63,
            "6": 21,
            "7": 2,
          },
        },
        "2019": {
          total: 207,
          statusBreakdown: {
            lulus: 166,
            undurDiri: 6,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 32,
          },
          genderBreakdown: {
            male: 180,
            female: 27,
          },
          graduationYears: {
            "4": 103,
            "5": 56,
            "6": 6,
          },
        },
        "2020": {
          total: 199,
          statusBreakdown: {
            lulus: 147,
            undurDiri: 5,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 0,
            other: 45,
          },
          genderBreakdown: {
            male: 172,
            female: 27,
          },
          graduationYears: {
            "4": 133,
            "5": 14,
          },
        },
        "2021": {
          total: 198,
          statusBreakdown: {
            lulus: 21,
            undurDiri: 1,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 174,
          },
          genderBreakdown: {
            male: 167,
            female: 31,
          },
          graduationYears: {
            "4": 21,
          },
        },
        "2022": {
          total: 198,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 2,
            aktif: 12,
            cuti: 0,
            other: 184,
          },
          genderBreakdown: {
            male: 169,
            female: 29,
          },
          graduationYears: {},
        },
        "2023": {
          total: 217,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 10,
            cuti: 0,
            other: 207,
          },
          genderBreakdown: {
            male: 190,
            female: 27,
          },
          graduationYears: {},
        },
        "2024": {
          total: 173,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 5,
            cuti: 0,
            other: 168,
          },
          genderBreakdown: {
            male: 146,
            female: 27,
          },
          graduationYears: {},
        },
      },
    },
    "132": {
      prodiCode: "132",
      prodiName: "Teknik Elektro",
      total: 1298,
      statusBreakdown: {
        lulus: 841,
        undurDiri: 36,
        dikeluarkan: 14,
        aktif: 25,
        cuti: 0,
        other: 382,
      },
      genderBreakdown: {
        male: 1089,
        female: 209,
      },
      byBatch: {
        "2001": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2002": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2004": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2007": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 2,
          },
          graduationYears: {
            "5": 1,
          },
        },
        "2011": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 1,
          },
          graduationYears: {
            "4": 1,
            "6": 2,
          },
        },
        "2012": {
          total: 19,
          statusBreakdown: {
            lulus: 18,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 18,
            female: 1,
          },
          graduationYears: {
            "5": 14,
            "6": 3,
            "7": 1,
          },
        },
        "2013": {
          total: 141,
          statusBreakdown: {
            lulus: 137,
            undurDiri: 2,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 126,
            female: 15,
          },
          graduationYears: {
            "4": 99,
            "5": 31,
            "6": 5,
            "7": 2,
          },
        },
        "2014": {
          total: 150,
          statusBreakdown: {
            lulus: 144,
            undurDiri: 3,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 128,
            female: 22,
          },
          graduationYears: {
            "4": 100,
            "5": 28,
            "6": 11,
            "7": 5,
          },
        },
        "2015": {
          total: 99,
          statusBreakdown: {
            lulus: 93,
            undurDiri: 5,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 80,
            female: 19,
          },
          graduationYears: {
            "3": 1,
            "4": 65,
            "5": 20,
            "6": 5,
            "7": 2,
          },
        },
        "2016": {
          total: 120,
          statusBreakdown: {
            lulus: 112,
            undurDiri: 6,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 97,
            female: 23,
          },
          graduationYears: {
            "3": 3,
            "4": 77,
            "5": 21,
            "6": 7,
            "7": 4,
          },
        },
        "2017": {
          total: 91,
          statusBreakdown: {
            lulus: 83,
            undurDiri: 3,
            dikeluarkan: 4,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 77,
            female: 14,
          },
          graduationYears: {
            "4": 59,
            "5": 18,
            "6": 4,
            "7": 2,
          },
        },
        "2018": {
          total: 84,
          statusBreakdown: {
            lulus: 76,
            undurDiri: 4,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 72,
            female: 12,
          },
          graduationYears: {
            "4": 63,
            "5": 12,
            "6": 1,
          },
        },
        "2019": {
          total: 73,
          statusBreakdown: {
            lulus: 64,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 66,
            female: 7,
          },
          graduationYears: {
            "4": 59,
            "5": 4,
            "6": 1,
          },
        },
        "2020": {
          total: 66,
          statusBreakdown: {
            lulus: 44,
            undurDiri: 5,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 16,
          },
          genderBreakdown: {
            male: 60,
            female: 6,
          },
          graduationYears: {
            "4": 43,
            "5": 1,
          },
        },
        "2021": {
          total: 91,
          statusBreakdown: {
            lulus: 62,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 28,
          },
          genderBreakdown: {
            male: 64,
            female: 27,
          },
          graduationYears: {
            "3": 1,
            "4": 61,
          },
        },
        "2022": {
          total: 120,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 7,
            cuti: 0,
            other: 112,
          },
          genderBreakdown: {
            male: 105,
            female: 15,
          },
          graduationYears: {},
        },
        "2023": {
          total: 126,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 8,
            cuti: 0,
            other: 117,
          },
          genderBreakdown: {
            male: 100,
            female: 26,
          },
          graduationYears: {},
        },
        "2024": {
          total: 110,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 9,
            cuti: 0,
            other: 101,
          },
          genderBreakdown: {
            male: 91,
            female: 19,
          },
          graduationYears: {},
        },
      },
    },
    "133": {
      prodiCode: "133",
      prodiName: "Teknik Fisika",
      total: 1122,
      statusBreakdown: {
        lulus: 695,
        undurDiri: 36,
        dikeluarkan: 4,
        aktif: 24,
        cuti: 0,
        other: 363,
      },
      genderBreakdown: {
        male: 777,
        female: 345,
      },
      byBatch: {
        "2005": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2011": {
          total: 6,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 0,
          },
          graduationYears: {
            "6": 6,
          },
        },
        "2012": {
          total: 4,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 0,
          },
          graduationYears: {
            "5": 1,
            "6": 2,
          },
        },
        "2013": {
          total: 90,
          statusBreakdown: {
            lulus: 88,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 56,
            female: 34,
          },
          graduationYears: {
            "4": 59,
            "5": 26,
            "6": 3,
          },
        },
        "2014": {
          total: 89,
          statusBreakdown: {
            lulus: 87,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 52,
            female: 37,
          },
          graduationYears: {
            "4": 54,
            "5": 21,
            "6": 8,
            "7": 4,
          },
        },
        "2015": {
          total: 93,
          statusBreakdown: {
            lulus: 90,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 72,
            female: 21,
          },
          graduationYears: {
            "4": 73,
            "5": 12,
            "6": 4,
            "7": 1,
          },
        },
        "2016": {
          total: 91,
          statusBreakdown: {
            lulus: 87,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 66,
            female: 25,
          },
          graduationYears: {
            "4": 54,
            "5": 30,
            "6": 2,
            "7": 1,
          },
        },
        "2017": {
          total: 84,
          statusBreakdown: {
            lulus: 80,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 66,
            female: 18,
          },
          graduationYears: {
            "4": 49,
            "5": 22,
            "6": 9,
          },
        },
        "2018": {
          total: 61,
          statusBreakdown: {
            lulus: 56,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 43,
            female: 18,
          },
          graduationYears: {
            "4": 42,
            "5": 11,
            "6": 3,
          },
        },
        "2019": {
          total: 105,
          statusBreakdown: {
            lulus: 95,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 8,
          },
          genderBreakdown: {
            male: 80,
            female: 25,
          },
          graduationYears: {
            "4": 81,
            "5": 11,
            "6": 3,
          },
        },
        "2020": {
          total: 93,
          statusBreakdown: {
            lulus: 76,
            undurDiri: 5,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 12,
          },
          genderBreakdown: {
            male: 69,
            female: 24,
          },
          graduationYears: {
            "4": 71,
            "5": 5,
          },
        },
        "2021": {
          total: 80,
          statusBreakdown: {
            lulus: 27,
            undurDiri: 1,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 50,
          },
          genderBreakdown: {
            male: 57,
            female: 23,
          },
          graduationYears: {
            "4": 27,
          },
        },
        "2022": {
          total: 102,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 7,
            dikeluarkan: 2,
            aktif: 13,
            cuti: 0,
            other: 80,
          },
          genderBreakdown: {
            male: 66,
            female: 36,
          },
          graduationYears: {},
        },
        "2023": {
          total: 114,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 4,
            cuti: 0,
            other: 109,
          },
          genderBreakdown: {
            male: 74,
            female: 40,
          },
          graduationYears: {},
        },
        "2024": {
          total: 109,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 7,
            cuti: 0,
            other: 102,
          },
          genderBreakdown: {
            male: 65,
            female: 44,
          },
          graduationYears: {},
        },
      },
    },
    "134": {
      prodiCode: "134",
      prodiName: "Teknik Industri",
      total: 1720,
      statusBreakdown: {
        lulus: 996,
        undurDiri: 28,
        dikeluarkan: 9,
        aktif: 48,
        cuti: 0,
        other: 639,
      },
      genderBreakdown: {
        male: 854,
        female: 866,
      },
      byBatch: {
        "1996": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2004": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2006": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {
            "5": 1,
          },
        },
        "2011": {
          total: 4,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 1,
          },
          graduationYears: {
            "6": 2,
          },
        },
        "2012": {
          total: 7,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 3,
          },
          graduationYears: {
            "5": 3,
            "6": 2,
            "7": 2,
          },
        },
        "2013": {
          total: 105,
          statusBreakdown: {
            lulus: 103,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 38,
            female: 67,
          },
          graduationYears: {
            "4": 76,
            "5": 20,
            "6": 6,
            "7": 1,
          },
        },
        "2014": {
          total: 111,
          statusBreakdown: {
            lulus: 109,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 51,
            female: 60,
          },
          graduationYears: {
            "4": 88,
            "5": 12,
            "6": 3,
            "7": 6,
          },
        },
        "2015": {
          total: 110,
          statusBreakdown: {
            lulus: 106,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 58,
            female: 52,
          },
          graduationYears: {
            "4": 62,
            "5": 35,
            "6": 6,
            "7": 1,
          },
        },
        "2016": {
          total: 134,
          statusBreakdown: {
            lulus: 130,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 77,
            female: 57,
          },
          graduationYears: {
            "4": 62,
            "5": 36,
            "6": 14,
            "7": 16,
          },
        },
        "2017": {
          total: 129,
          statusBreakdown: {
            lulus: 124,
            undurDiri: 2,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 70,
            female: 59,
          },
          graduationYears: {
            "4": 69,
            "5": 41,
            "6": 12,
            "7": 2,
          },
        },
        "2018": {
          total: 143,
          statusBreakdown: {
            lulus: 131,
            undurDiri: 4,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 7,
          },
          genderBreakdown: {
            male: 69,
            female: 74,
          },
          graduationYears: {
            "4": 83,
            "5": 44,
            "6": 4,
          },
        },
        "2019": {
          total: 168,
          statusBreakdown: {
            lulus: 146,
            undurDiri: 5,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 16,
          },
          genderBreakdown: {
            male: 92,
            female: 76,
          },
          graduationYears: {
            "4": 116,
            "5": 30,
          },
        },
        "2020": {
          total: 147,
          statusBreakdown: {
            lulus: 128,
            undurDiri: 4,
            dikeluarkan: 1,
            aktif: 1,
            cuti: 0,
            other: 13,
          },
          genderBreakdown: {
            male: 62,
            female: 85,
          },
          graduationYears: {
            "3": 1,
            "4": 114,
            "5": 13,
          },
        },
        "2021": {
          total: 147,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 138,
          },
          genderBreakdown: {
            male: 73,
            female: 74,
          },
          graduationYears: {
            "4": 6,
          },
        },
        "2022": {
          total: 151,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 17,
            cuti: 0,
            other: 131,
          },
          genderBreakdown: {
            male: 76,
            female: 75,
          },
          graduationYears: {},
        },
        "2023": {
          total: 169,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 17,
            cuti: 0,
            other: 152,
          },
          genderBreakdown: {
            male: 85,
            female: 84,
          },
          graduationYears: {},
        },
        "2024": {
          total: 191,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 12,
            cuti: 0,
            other: 179,
          },
          genderBreakdown: {
            male: 95,
            female: 96,
          },
          graduationYears: {},
        },
      },
    },
    "135": {
      prodiCode: "135",
      prodiName: "Teknik Informatika",
      total: 1882,
      statusBreakdown: {
        lulus: 1166,
        undurDiri: 35,
        dikeluarkan: 7,
        aktif: 25,
        cuti: 0,
        other: 649,
      },
      genderBreakdown: {
        male: 1575,
        female: 307,
      },
      byBatch: {
        "2005": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2007": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "5": 1,
          },
        },
        "2009": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2011": {
          total: 15,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 13,
            female: 2,
          },
          graduationYears: {
            "6": 9,
            "7": 3,
          },
        },
        "2012": {
          total: 24,
          statusBreakdown: {
            lulus: 23,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 19,
            female: 5,
          },
          graduationYears: {
            "5": 9,
            "6": 10,
            "7": 4,
          },
        },
        "2013": {
          total: 92,
          statusBreakdown: {
            lulus: 84,
            undurDiri: 6,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 77,
            female: 15,
          },
          graduationYears: {
            "4": 61,
            "5": 15,
            "6": 6,
            "7": 1,
            "8": 1,
          },
        },
        "2014": {
          total: 110,
          statusBreakdown: {
            lulus: 106,
            undurDiri: 3,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 90,
            female: 20,
          },
          graduationYears: {
            "3": 1,
            "4": 73,
            "5": 15,
            "6": 11,
            "7": 6,
          },
        },
        "2015": {
          total: 149,
          statusBreakdown: {
            lulus: 141,
            undurDiri: 8,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 119,
            female: 30,
          },
          graduationYears: {
            "4": 120,
            "5": 12,
            "6": 8,
            "7": 1,
          },
        },
        "2016": {
          total: 156,
          statusBreakdown: {
            lulus: 149,
            undurDiri: 6,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 132,
            female: 24,
          },
          graduationYears: {
            "4": 107,
            "5": 23,
            "6": 10,
            "7": 9,
          },
        },
        "2017": {
          total: 150,
          statusBreakdown: {
            lulus: 145,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 123,
            female: 27,
          },
          graduationYears: {
            "4": 119,
            "5": 12,
            "6": 7,
            "7": 7,
          },
        },
        "2018": {
          total: 151,
          statusBreakdown: {
            lulus: 143,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 126,
            female: 25,
          },
          graduationYears: {
            "4": 100,
            "5": 27,
            "6": 10,
            "7": 6,
          },
        },
        "2019": {
          total: 221,
          statusBreakdown: {
            lulus: 190,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 29,
          },
          genderBreakdown: {
            male: 190,
            female: 31,
          },
          graduationYears: {
            "4": 170,
            "5": 14,
            "6": 6,
          },
        },
        "2020": {
          total: 172,
          statusBreakdown: {
            lulus: 150,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 22,
          },
          genderBreakdown: {
            male: 148,
            female: 24,
          },
          graduationYears: {
            "4": 147,
            "5": 3,
          },
        },
        "2021": {
          total: 164,
          statusBreakdown: {
            lulus: 20,
            undurDiri: 3,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 140,
          },
          genderBreakdown: {
            male: 133,
            female: 31,
          },
          graduationYears: {
            "4": 20,
          },
        },
        "2022": {
          total: 163,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 15,
            cuti: 0,
            other: 147,
          },
          genderBreakdown: {
            male: 139,
            female: 24,
          },
          graduationYears: {},
        },
        "2023": {
          total: 165,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 5,
            cuti: 0,
            other: 160,
          },
          genderBreakdown: {
            male: 139,
            female: 26,
          },
          graduationYears: {},
        },
        "2024": {
          total: 147,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 5,
            cuti: 0,
            other: 142,
          },
          genderBreakdown: {
            male: 125,
            female: 22,
          },
          graduationYears: {},
        },
      },
    },
    "136": {
      prodiCode: "136",
      prodiName: "Aeronotika dan Astronotika",
      total: 1036,
      statusBreakdown: {
        lulus: 643,
        undurDiri: 33,
        dikeluarkan: 5,
        aktif: 15,
        cuti: 0,
        other: 340,
      },
      genderBreakdown: {
        male: 862,
        female: 174,
      },
      byBatch: {
        "1997": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 0,
          },
          graduationYears: {},
        },
        "2005": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2011": {
          total: 4,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 1,
          },
          graduationYears: {
            "6": 4,
          },
        },
        "2012": {
          total: 8,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 1,
          },
          graduationYears: {
            "5": 3,
            "6": 4,
          },
        },
        "2013": {
          total: 69,
          statusBreakdown: {
            lulus: 67,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 57,
            female: 12,
          },
          graduationYears: {
            "4": 41,
            "5": 19,
            "6": 6,
            "7": 1,
          },
        },
        "2014": {
          total: 75,
          statusBreakdown: {
            lulus: 74,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 59,
            female: 16,
          },
          graduationYears: {
            "3": 2,
            "4": 56,
            "5": 10,
            "6": 4,
            "7": 2,
          },
        },
        "2015": {
          total: 55,
          statusBreakdown: {
            lulus: 52,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 44,
            female: 11,
          },
          graduationYears: {
            "4": 38,
            "5": 8,
            "6": 5,
            "7": 1,
          },
        },
        "2016": {
          total: 95,
          statusBreakdown: {
            lulus: 90,
            undurDiri: 5,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 81,
            female: 14,
          },
          graduationYears: {
            "4": 57,
            "5": 17,
            "6": 11,
            "7": 5,
          },
        },
        "2017": {
          total: 96,
          statusBreakdown: {
            lulus: 91,
            undurDiri: 1,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 84,
            female: 12,
          },
          graduationYears: {
            "4": 64,
            "5": 13,
            "6": 13,
            "7": 1,
          },
        },
        "2018": {
          total: 100,
          statusBreakdown: {
            lulus: 87,
            undurDiri: 6,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 82,
            female: 18,
          },
          graduationYears: {
            "4": 46,
            "5": 27,
            "6": 11,
            "7": 3,
          },
        },
        "2019": {
          total: 103,
          statusBreakdown: {
            lulus: 81,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 19,
          },
          genderBreakdown: {
            male: 87,
            female: 16,
          },
          graduationYears: {
            "4": 61,
            "5": 17,
            "6": 3,
          },
        },
        "2020": {
          total: 79,
          statusBreakdown: {
            lulus: 65,
            undurDiri: 6,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 8,
          },
          genderBreakdown: {
            male: 70,
            female: 9,
          },
          graduationYears: {
            "4": 57,
            "5": 8,
          },
        },
        "2021": {
          total: 83,
          statusBreakdown: {
            lulus: 22,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 59,
          },
          genderBreakdown: {
            male: 72,
            female: 11,
          },
          graduationYears: {
            "4": 22,
          },
        },
        "2022": {
          total: 105,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 3,
            dikeluarkan: 1,
            aktif: 7,
            cuti: 0,
            other: 94,
          },
          genderBreakdown: {
            male: 84,
            female: 21,
          },
          graduationYears: {},
        },
        "2023": {
          total: 80,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 4,
            cuti: 0,
            other: 75,
          },
          genderBreakdown: {
            male: 63,
            female: 17,
          },
          graduationYears: {},
        },
        "2024": {
          total: 81,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 4,
            cuti: 0,
            other: 77,
          },
          genderBreakdown: {
            male: 66,
            female: 15,
          },
          graduationYears: {},
        },
      },
    },
    "137": {
      prodiCode: "137",
      prodiName: "Teknik Material",
      total: 789,
      statusBreakdown: {
        lulus: 508,
        undurDiri: 19,
        dikeluarkan: 6,
        aktif: 16,
        cuti: 0,
        other: 240,
      },
      genderBreakdown: {
        male: 615,
        female: 174,
      },
      byBatch: {
        "2008": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2010": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "5": 1,
          },
        },
        "2011": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 0,
          },
          graduationYears: {
            "6": 2,
          },
        },
        "2012": {
          total: 12,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 11,
            female: 1,
          },
          graduationYears: {
            "5": 4,
            "6": 7,
            "7": 1,
          },
        },
        "2013": {
          total: 60,
          statusBreakdown: {
            lulus: 59,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 51,
            female: 9,
          },
          graduationYears: {
            "4": 36,
            "5": 17,
            "6": 6,
          },
        },
        "2014": {
          total: 54,
          statusBreakdown: {
            lulus: 54,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 48,
            female: 6,
          },
          graduationYears: {
            "4": 22,
            "5": 23,
            "6": 7,
            "7": 2,
          },
        },
        "2015": {
          total: 61,
          statusBreakdown: {
            lulus: 61,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 48,
            female: 13,
          },
          graduationYears: {
            "4": 47,
            "5": 11,
            "6": 3,
          },
        },
        "2016": {
          total: 62,
          statusBreakdown: {
            lulus: 58,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 47,
            female: 15,
          },
          graduationYears: {
            "4": 45,
            "5": 10,
            "6": 2,
            "7": 1,
          },
        },
        "2017": {
          total: 64,
          statusBreakdown: {
            lulus: 63,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 49,
            female: 15,
          },
          graduationYears: {
            "4": 39,
            "5": 16,
            "6": 7,
            "7": 1,
          },
        },
        "2018": {
          total: 75,
          statusBreakdown: {
            lulus: 70,
            undurDiri: 5,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 59,
            female: 16,
          },
          graduationYears: {
            "4": 52,
            "5": 15,
            "6": 2,
            "7": 1,
          },
        },
        "2019": {
          total: 71,
          statusBreakdown: {
            lulus: 63,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 53,
            female: 18,
          },
          graduationYears: {
            "4": 46,
            "5": 16,
            "6": 1,
          },
        },
        "2020": {
          total: 69,
          statusBreakdown: {
            lulus: 56,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 10,
          },
          genderBreakdown: {
            male: 49,
            female: 20,
          },
          graduationYears: {
            "4": 53,
            "5": 3,
          },
        },
        "2021": {
          total: 59,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 2,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 46,
          },
          genderBreakdown: {
            male: 44,
            female: 15,
          },
          graduationYears: {
            "4": 9,
          },
        },
        "2022": {
          total: 59,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 2,
            aktif: 7,
            cuti: 0,
            other: 50,
          },
          genderBreakdown: {
            male: 45,
            female: 14,
          },
          graduationYears: {},
        },
        "2023": {
          total: 77,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 6,
            cuti: 0,
            other: 70,
          },
          genderBreakdown: {
            male: 59,
            female: 18,
          },
          graduationYears: {},
        },
        "2024": {
          total: 62,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 59,
          },
          genderBreakdown: {
            male: 49,
            female: 13,
          },
          graduationYears: {},
        },
      },
    },
    "143": {
      prodiCode: "143",
      prodiName: "Teknik Pangan",
      total: 437,
      statusBreakdown: {
        lulus: 237,
        undurDiri: 5,
        dikeluarkan: 1,
        aktif: 18,
        cuti: 0,
        other: 176,
      },
      genderBreakdown: {
        male: 119,
        female: 318,
      },
      byBatch: {
        "2015": {
          total: 40,
          statusBreakdown: {
            lulus: 40,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 12,
            female: 28,
          },
          graduationYears: {
            "4": 33,
            "5": 7,
          },
        },
        "2016": {
          total: 43,
          statusBreakdown: {
            lulus: 42,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 35,
          },
          graduationYears: {
            "4": 41,
            "5": 1,
          },
        },
        "2017": {
          total: 40,
          statusBreakdown: {
            lulus: 38,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 14,
            female: 26,
          },
          graduationYears: {
            "4": 32,
            "5": 4,
            "6": 2,
          },
        },
        "2018": {
          total: 40,
          statusBreakdown: {
            lulus: 39,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 12,
            female: 28,
          },
          graduationYears: {
            "4": 31,
            "5": 8,
          },
        },
        "2019": {
          total: 41,
          statusBreakdown: {
            lulus: 40,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 11,
            female: 30,
          },
          graduationYears: {
            "4": 38,
            "5": 2,
          },
        },
        "2020": {
          total: 40,
          statusBreakdown: {
            lulus: 38,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 14,
            female: 26,
          },
          graduationYears: {
            "4": 38,
          },
        },
        "2021": {
          total: 28,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 28,
          },
          genderBreakdown: {
            male: 8,
            female: 20,
          },
          graduationYears: {},
        },
        "2022": {
          total: 60,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 8,
            cuti: 0,
            other: 52,
          },
          genderBreakdown: {
            male: 14,
            female: 46,
          },
          graduationYears: {},
        },
        "2023": {
          total: 60,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 5,
            cuti: 0,
            other: 55,
          },
          genderBreakdown: {
            male: 16,
            female: 44,
          },
          graduationYears: {},
        },
        "2024": {
          total: 45,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 5,
            cuti: 0,
            other: 40,
          },
          genderBreakdown: {
            male: 10,
            female: 35,
          },
          graduationYears: {},
        },
      },
    },
    "144": {
      prodiCode: "144",
      prodiName: "Manajemen Rekayasa Industri",
      total: 626,
      statusBreakdown: {
        lulus: 400,
        undurDiri: 16,
        dikeluarkan: 2,
        aktif: 9,
        cuti: 0,
        other: 199,
      },
      genderBreakdown: {
        male: 269,
        female: 357,
      },
      byBatch: {
        "2011": {
          total: 8,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 1,
          },
          graduationYears: {
            "6": 2,
            "7": 5,
          },
        },
        "2012": {
          total: 7,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 3,
          },
          graduationYears: {
            "5": 4,
            "6": 1,
            "7": 1,
          },
        },
        "2013": {
          total: 40,
          statusBreakdown: {
            lulus: 37,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 17,
            female: 23,
          },
          graduationYears: {
            "4": 15,
            "5": 19,
            "6": 2,
            "7": 1,
          },
        },
        "2014": {
          total: 53,
          statusBreakdown: {
            lulus: 53,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 22,
            female: 31,
          },
          graduationYears: {
            "4": 26,
            "5": 15,
            "6": 5,
            "7": 7,
          },
        },
        "2015": {
          total: 51,
          statusBreakdown: {
            lulus: 48,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 20,
            female: 31,
          },
          graduationYears: {
            "4": 37,
            "5": 7,
            "6": 2,
            "7": 2,
          },
        },
        "2016": {
          total: 51,
          statusBreakdown: {
            lulus: 50,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 22,
            female: 29,
          },
          graduationYears: {
            "4": 20,
            "5": 18,
            "6": 6,
            "7": 6,
          },
        },
        "2017": {
          total: 53,
          statusBreakdown: {
            lulus: 52,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 18,
            female: 35,
          },
          graduationYears: {
            "4": 34,
            "5": 15,
            "6": 3,
          },
        },
        "2018": {
          total: 50,
          statusBreakdown: {
            lulus: 49,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 20,
            female: 30,
          },
          graduationYears: {
            "4": 31,
            "5": 17,
            "6": 1,
          },
        },
        "2019": {
          total: 50,
          statusBreakdown: {
            lulus: 46,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 19,
            female: 31,
          },
          graduationYears: {
            "4": 38,
            "5": 8,
          },
        },
        "2020": {
          total: 52,
          statusBreakdown: {
            lulus: 45,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 21,
            female: 31,
          },
          graduationYears: {
            "4": 41,
            "5": 4,
          },
        },
        "2021": {
          total: 50,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 41,
          },
          genderBreakdown: {
            male: 17,
            female: 33,
          },
          graduationYears: {
            "4": 7,
          },
        },
        "2022": {
          total: 50,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 49,
          },
          genderBreakdown: {
            male: 26,
            female: 24,
          },
          graduationYears: {},
        },
        "2023": {
          total: 61,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 4,
            cuti: 0,
            other: 55,
          },
          genderBreakdown: {
            male: 27,
            female: 34,
          },
          graduationYears: {},
        },
        "2024": {
          total: 50,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 4,
            cuti: 0,
            other: 46,
          },
          genderBreakdown: {
            male: 29,
            female: 21,
          },
          graduationYears: {},
        },
      },
    },
    "145": {
      prodiCode: "145",
      prodiName: "Teknik Bioenergi dan Kemurgi",
      total: 402,
      statusBreakdown: {
        lulus: 206,
        undurDiri: 19,
        dikeluarkan: 3,
        aktif: 13,
        cuti: 0,
        other: 161,
      },
      genderBreakdown: {
        male: 235,
        female: 167,
      },
      byBatch: {
        "2015": {
          total: 36,
          statusBreakdown: {
            lulus: 34,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 24,
            female: 12,
          },
          graduationYears: {
            "4": 22,
            "5": 8,
            "6": 4,
          },
        },
        "2016": {
          total: 34,
          statusBreakdown: {
            lulus: 32,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 23,
            female: 11,
          },
          graduationYears: {
            "4": 28,
            "5": 4,
          },
        },
        "2017": {
          total: 33,
          statusBreakdown: {
            lulus: 30,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 20,
            female: 13,
          },
          graduationYears: {
            "4": 26,
            "5": 3,
            "6": 1,
          },
        },
        "2018": {
          total: 31,
          statusBreakdown: {
            lulus: 29,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 13,
            female: 18,
          },
          graduationYears: {
            "4": 22,
            "5": 7,
          },
        },
        "2019": {
          total: 37,
          statusBreakdown: {
            lulus: 32,
            undurDiri: 5,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 22,
            female: 15,
          },
          graduationYears: {
            "4": 29,
            "5": 3,
          },
        },
        "2020": {
          total: 28,
          statusBreakdown: {
            lulus: 24,
            undurDiri: 2,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 15,
            female: 13,
          },
          graduationYears: {
            "4": 24,
          },
        },
        "2021": {
          total: 33,
          statusBreakdown: {
            lulus: 25,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 7,
          },
          genderBreakdown: {
            male: 22,
            female: 11,
          },
          graduationYears: {
            "4": 25,
          },
        },
        "2022": {
          total: 61,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 7,
            cuti: 0,
            other: 52,
          },
          genderBreakdown: {
            male: 38,
            female: 23,
          },
          graduationYears: {},
        },
        "2023": {
          total: 69,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 0,
            other: 66,
          },
          genderBreakdown: {
            male: 38,
            female: 31,
          },
          graduationYears: {},
        },
        "2024": {
          total: 40,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 4,
            cuti: 0,
            other: 36,
          },
          genderBreakdown: {
            male: 20,
            female: 20,
          },
          graduationYears: {},
        },
      },
    },
    "150": {
      prodiCode: "150",
      prodiName: "Teknik Sipil",
      total: 1914,
      statusBreakdown: {
        lulus: 1311,
        undurDiri: 10,
        dikeluarkan: 6,
        aktif: 40,
        cuti: 0,
        other: 547,
      },
      genderBreakdown: {
        male: 1320,
        female: 594,
      },
      byBatch: {
        "2000": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2005": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2011": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "6": 1,
          },
        },
        "2012": {
          total: 8,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 0,
          },
          graduationYears: {
            "5": 4,
            "6": 1,
            "7": 2,
          },
        },
        "2013": {
          total: 137,
          statusBreakdown: {
            lulus: 137,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 86,
            female: 51,
          },
          graduationYears: {
            "4": 134,
            "5": 3,
          },
        },
        "2014": {
          total: 159,
          statusBreakdown: {
            lulus: 157,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 105,
            female: 54,
          },
          graduationYears: {
            "4": 150,
            "5": 6,
            "7": 1,
          },
        },
        "2015": {
          total: 159,
          statusBreakdown: {
            lulus: 157,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 107,
            female: 52,
          },
          graduationYears: {
            "4": 149,
            "5": 5,
            "6": 2,
            "7": 1,
          },
        },
        "2016": {
          total: 161,
          statusBreakdown: {
            lulus: 160,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 108,
            female: 53,
          },
          graduationYears: {
            "4": 116,
            "5": 41,
            "6": 2,
            "7": 1,
          },
        },
        "2017": {
          total: 160,
          statusBreakdown: {
            lulus: 159,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 124,
            female: 36,
          },
          graduationYears: {
            "4": 133,
            "5": 17,
            "6": 4,
            "7": 5,
          },
        },
        "2018": {
          total: 160,
          statusBreakdown: {
            lulus: 157,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 120,
            female: 40,
          },
          graduationYears: {
            "4": 121,
            "5": 33,
            "6": 3,
          },
        },
        "2019": {
          total: 160,
          statusBreakdown: {
            lulus: 156,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 107,
            female: 53,
          },
          graduationYears: {
            "4": 151,
            "5": 5,
          },
        },
        "2020": {
          total: 168,
          statusBreakdown: {
            lulus: 155,
            undurDiri: 2,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 9,
          },
          genderBreakdown: {
            male: 115,
            female: 53,
          },
          graduationYears: {
            "4": 153,
            "5": 2,
          },
        },
        "2021": {
          total: 160,
          statusBreakdown: {
            lulus: 63,
            undurDiri: 3,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 92,
          },
          genderBreakdown: {
            male: 117,
            female: 43,
          },
          graduationYears: {
            "4": 63,
          },
        },
        "2022": {
          total: 164,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 13,
            cuti: 0,
            other: 150,
          },
          genderBreakdown: {
            male: 109,
            female: 55,
          },
          graduationYears: {},
        },
        "2023": {
          total: 164,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 12,
            cuti: 0,
            other: 152,
          },
          genderBreakdown: {
            male: 102,
            female: 62,
          },
          graduationYears: {},
        },
        "2024": {
          total: 151,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 15,
            cuti: 0,
            other: 136,
          },
          genderBreakdown: {
            male: 109,
            female: 42,
          },
          graduationYears: {},
        },
      },
    },
    "151": {
      prodiCode: "151",
      prodiName: "Teknik Geodesi dan Geomatika",
      total: 1290,
      statusBreakdown: {
        lulus: 858,
        undurDiri: 13,
        dikeluarkan: 7,
        aktif: 72,
        cuti: 0,
        other: 340,
      },
      genderBreakdown: {
        male: 789,
        female: 501,
      },
      byBatch: {
        "1999": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2010": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {
            "7": 2,
          },
        },
        "2011": {
          total: 4,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 1,
          },
          graduationYears: {
            "6": 1,
            "7": 2,
          },
        },
        "2012": {
          total: 8,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 2,
          },
          graduationYears: {
            "5": 6,
            "6": 2,
          },
        },
        "2013": {
          total: 98,
          statusBreakdown: {
            lulus: 97,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 59,
            female: 39,
          },
          graduationYears: {
            "4": 77,
            "5": 15,
            "6": 3,
            "7": 2,
          },
        },
        "2014": {
          total: 102,
          statusBreakdown: {
            lulus: 100,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 60,
            female: 42,
          },
          graduationYears: {
            "4": 80,
            "5": 13,
            "6": 2,
            "7": 5,
          },
        },
        "2015": {
          total: 100,
          statusBreakdown: {
            lulus: 97,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 76,
            female: 24,
          },
          graduationYears: {
            "4": 81,
            "5": 11,
            "6": 4,
            "7": 1,
          },
        },
        "2016": {
          total: 100,
          statusBreakdown: {
            lulus: 95,
            undurDiri: 2,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 70,
            female: 30,
          },
          graduationYears: {
            "4": 78,
            "5": 12,
            "6": 1,
            "7": 4,
          },
        },
        "2017": {
          total: 101,
          statusBreakdown: {
            lulus: 98,
            undurDiri: 1,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 68,
            female: 33,
          },
          graduationYears: {
            "4": 90,
            "5": 4,
            "6": 2,
            "7": 2,
          },
        },
        "2018": {
          total: 100,
          statusBreakdown: {
            lulus: 98,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 64,
            female: 36,
          },
          graduationYears: {
            "4": 91,
            "5": 4,
            "6": 3,
          },
        },
        "2019": {
          total: 101,
          statusBreakdown: {
            lulus: 100,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 63,
            female: 38,
          },
          graduationYears: {
            "4": 96,
            "5": 4,
          },
        },
        "2020": {
          total: 117,
          statusBreakdown: {
            lulus: 86,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 28,
          },
          genderBreakdown: {
            male: 49,
            female: 68,
          },
          graduationYears: {
            "4": 85,
            "5": 1,
          },
        },
        "2021": {
          total: 90,
          statusBreakdown: {
            lulus: 73,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 15,
          },
          genderBreakdown: {
            male: 53,
            female: 37,
          },
          graduationYears: {
            "4": 73,
          },
        },
        "2022": {
          total: 121,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 25,
            cuti: 0,
            other: 96,
          },
          genderBreakdown: {
            male: 74,
            female: 47,
          },
          graduationYears: {},
        },
        "2023": {
          total: 123,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 22,
            cuti: 0,
            other: 101,
          },
          genderBreakdown: {
            male: 68,
            female: 55,
          },
          graduationYears: {},
        },
        "2024": {
          total: 122,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 25,
            cuti: 0,
            other: 97,
          },
          genderBreakdown: {
            male: 74,
            female: 48,
          },
          graduationYears: {},
        },
      },
    },
    "152": {
      prodiCode: "152",
      prodiName: "Arsitektur",
      total: 1165,
      statusBreakdown: {
        lulus: 801,
        undurDiri: 25,
        dikeluarkan: 1,
        aktif: 18,
        cuti: 1,
        other: 319,
      },
      genderBreakdown: {
        male: 411,
        female: 754,
      },
      byBatch: {
        "2000": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2005": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "6": 1,
          },
        },
        "2007": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "5": 1,
          },
        },
        "2011": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "5": 1,
          },
        },
        "2012": {
          total: 8,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 7,
          },
          graduationYears: {
            "4": 2,
            "5": 4,
            "6": 1,
            "7": 1,
          },
        },
        "2013": {
          total: 105,
          statusBreakdown: {
            lulus: 104,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 28,
            female: 77,
          },
          graduationYears: {
            "4": 89,
            "5": 13,
            "6": 2,
          },
        },
        "2014": {
          total: 103,
          statusBreakdown: {
            lulus: 103,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 39,
            female: 64,
          },
          graduationYears: {
            "4": 86,
            "5": 13,
            "6": 4,
          },
        },
        "2015": {
          total: 92,
          statusBreakdown: {
            lulus: 88,
            undurDiri: 3,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 46,
            female: 46,
          },
          graduationYears: {
            "4": 81,
            "5": 3,
            "6": 4,
          },
        },
        "2016": {
          total: 91,
          statusBreakdown: {
            lulus: 86,
            undurDiri: 5,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 37,
            female: 54,
          },
          graduationYears: {
            "4": 65,
            "5": 17,
            "6": 4,
          },
        },
        "2017": {
          total: 90,
          statusBreakdown: {
            lulus: 87,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 31,
            female: 59,
          },
          graduationYears: {
            "4": 64,
            "5": 20,
            "6": 2,
            "7": 1,
          },
        },
        "2018": {
          total: 98,
          statusBreakdown: {
            lulus: 94,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 31,
            female: 67,
          },
          graduationYears: {
            "4": 85,
            "5": 8,
            "6": 1,
          },
        },
        "2019": {
          total: 84,
          statusBreakdown: {
            lulus: 82,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 27,
            female: 57,
          },
          graduationYears: {
            "4": 74,
            "5": 7,
            "6": 1,
          },
        },
        "2020": {
          total: 94,
          statusBreakdown: {
            lulus: 78,
            undurDiri: 6,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 9,
          },
          genderBreakdown: {
            male: 30,
            female: 64,
          },
          graduationYears: {
            "4": 75,
            "5": 3,
          },
        },
        "2021": {
          total: 81,
          statusBreakdown: {
            lulus: 67,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 12,
          },
          genderBreakdown: {
            male: 27,
            female: 54,
          },
          graduationYears: {
            "4": 67,
          },
        },
        "2022": {
          total: 107,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 7,
            cuti: 0,
            other: 99,
          },
          genderBreakdown: {
            male: 34,
            female: 73,
          },
          graduationYears: {},
        },
        "2023": {
          total: 104,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 8,
            cuti: 0,
            other: 96,
          },
          genderBreakdown: {
            male: 42,
            female: 62,
          },
          graduationYears: {},
        },
        "2024": {
          total: 104,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 1,
            other: 101,
          },
          genderBreakdown: {
            male: 36,
            female: 68,
          },
          graduationYears: {},
        },
      },
    },
    "153": {
      prodiCode: "153",
      prodiName: "Teknik Lingkungan",
      total: 1292,
      statusBreakdown: {
        lulus: 771,
        undurDiri: 30,
        dikeluarkan: 15,
        aktif: 33,
        cuti: 0,
        other: 443,
      },
      genderBreakdown: {
        male: 536,
        female: 756,
      },
      byBatch: {
        "2008": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2011": {
          total: 7,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 4,
          },
          graduationYears: {
            "6": 5,
            "7": 1,
          },
        },
        "2012": {
          total: 11,
          statusBreakdown: {
            lulus: 11,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 5,
          },
          graduationYears: {
            "4": 1,
            "5": 5,
            "6": 3,
            "7": 2,
          },
        },
        "2013": {
          total: 101,
          statusBreakdown: {
            lulus: 99,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 38,
            female: 63,
          },
          graduationYears: {
            "4": 79,
            "5": 14,
            "6": 4,
            "7": 2,
          },
        },
        "2014": {
          total: 97,
          statusBreakdown: {
            lulus: 97,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 31,
            female: 66,
          },
          graduationYears: {
            "4": 66,
            "5": 22,
            "6": 2,
            "7": 7,
          },
        },
        "2015": {
          total: 83,
          statusBreakdown: {
            lulus: 80,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 33,
            female: 50,
          },
          graduationYears: {
            "4": 55,
            "5": 16,
            "6": 3,
            "7": 6,
          },
        },
        "2016": {
          total: 102,
          statusBreakdown: {
            lulus: 95,
            undurDiri: 4,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 49,
            female: 53,
          },
          graduationYears: {
            "4": 43,
            "5": 35,
            "6": 10,
            "7": 7,
          },
        },
        "2017": {
          total: 95,
          statusBreakdown: {
            lulus: 84,
            undurDiri: 6,
            dikeluarkan: 5,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 44,
            female: 51,
          },
          graduationYears: {
            "4": 44,
            "5": 25,
            "6": 9,
            "7": 6,
          },
        },
        "2018": {
          total: 100,
          statusBreakdown: {
            lulus: 89,
            undurDiri: 5,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 46,
            female: 54,
          },
          graduationYears: {
            "4": 50,
            "5": 30,
            "6": 9,
          },
        },
        "2019": {
          total: 120,
          statusBreakdown: {
            lulus: 108,
            undurDiri: 5,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 47,
            female: 73,
          },
          graduationYears: {
            "4": 86,
            "5": 21,
            "6": 1,
          },
        },
        "2020": {
          total: 107,
          statusBreakdown: {
            lulus: 92,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 11,
          },
          genderBreakdown: {
            male: 42,
            female: 65,
          },
          graduationYears: {
            "4": 86,
            "5": 6,
          },
        },
        "2021": {
          total: 121,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 112,
          },
          genderBreakdown: {
            male: 51,
            female: 70,
          },
          graduationYears: {
            "4": 9,
          },
        },
        "2022": {
          total: 119,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 12,
            cuti: 0,
            other: 104,
          },
          genderBreakdown: {
            male: 58,
            female: 61,
          },
          graduationYears: {},
        },
        "2023": {
          total: 114,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 8,
            cuti: 0,
            other: 106,
          },
          genderBreakdown: {
            male: 42,
            female: 72,
          },
          graduationYears: {},
        },
        "2024": {
          total: 114,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 13,
            cuti: 0,
            other: 101,
          },
          genderBreakdown: {
            male: 45,
            female: 69,
          },
          graduationYears: {},
        },
      },
    },
    "154": {
      prodiCode: "154",
      prodiName: "Perencanaan Wilayah dan Kota",
      total: 1545,
      statusBreakdown: {
        lulus: 961,
        undurDiri: 60,
        dikeluarkan: 14,
        aktif: 48,
        cuti: 0,
        other: 462,
      },
      genderBreakdown: {
        male: 598,
        female: 947,
      },
      byBatch: {
        "1995": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2010": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "7": 1,
          },
        },
        "2011": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2012": {
          total: 13,
          statusBreakdown: {
            lulus: 10,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 6,
          },
          graduationYears: {
            "5": 1,
            "6": 8,
            "7": 1,
          },
        },
        "2013": {
          total: 103,
          statusBreakdown: {
            lulus: 97,
            undurDiri: 4,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 45,
            female: 58,
          },
          graduationYears: {
            "4": 64,
            "5": 21,
            "6": 6,
            "7": 6,
          },
        },
        "2014": {
          total: 103,
          statusBreakdown: {
            lulus: 98,
            undurDiri: 4,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 35,
            female: 68,
          },
          graduationYears: {
            "4": 51,
            "5": 36,
            "6": 7,
            "7": 4,
          },
        },
        "2015": {
          total: 99,
          statusBreakdown: {
            lulus: 95,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 30,
            female: 69,
          },
          graduationYears: {
            "4": 65,
            "5": 23,
            "6": 3,
            "7": 4,
          },
        },
        "2016": {
          total: 138,
          statusBreakdown: {
            lulus: 129,
            undurDiri: 3,
            dikeluarkan: 6,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 70,
            female: 68,
          },
          graduationYears: {
            "4": 79,
            "5": 25,
            "6": 14,
            "7": 11,
          },
        },
        "2017": {
          total: 129,
          statusBreakdown: {
            lulus: 116,
            undurDiri: 10,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 44,
            female: 85,
          },
          graduationYears: {
            "4": 66,
            "5": 32,
            "6": 11,
            "7": 7,
          },
        },
        "2018": {
          total: 135,
          statusBreakdown: {
            lulus: 126,
            undurDiri: 4,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 60,
            female: 75,
          },
          graduationYears: {
            "4": 87,
            "5": 28,
            "6": 11,
          },
        },
        "2019": {
          total: 142,
          statusBreakdown: {
            lulus: 112,
            undurDiri: 12,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 18,
          },
          genderBreakdown: {
            male: 52,
            female: 90,
          },
          graduationYears: {
            "4": 95,
            "5": 17,
          },
        },
        "2020": {
          total: 104,
          statusBreakdown: {
            lulus: 89,
            undurDiri: 10,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 39,
            female: 65,
          },
          graduationYears: {
            "4": 86,
            "5": 3,
          },
        },
        "2021": {
          total: 123,
          statusBreakdown: {
            lulus: 87,
            undurDiri: 1,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 33,
          },
          genderBreakdown: {
            male: 56,
            female: 67,
          },
          graduationYears: {
            "4": 87,
          },
        },
        "2022": {
          total: 158,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 17,
            cuti: 0,
            other: 137,
          },
          genderBreakdown: {
            male: 52,
            female: 106,
          },
          graduationYears: {},
        },
        "2023": {
          total: 167,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 15,
            cuti: 0,
            other: 151,
          },
          genderBreakdown: {
            male: 50,
            female: 117,
          },
          graduationYears: {},
        },
        "2024": {
          total: 128,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 16,
            cuti: 0,
            other: 112,
          },
          genderBreakdown: {
            male: 56,
            female: 72,
          },
          graduationYears: {},
        },
      },
    },
    "155": {
      prodiCode: "155",
      prodiName: "Teknik Kelautan",
      total: 956,
      statusBreakdown: {
        lulus: 608,
        undurDiri: 24,
        dikeluarkan: 7,
        aktif: 20,
        cuti: 0,
        other: 297,
      },
      genderBreakdown: {
        male: 662,
        female: 294,
      },
      byBatch: {
        "2002": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2007": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2011": {
          total: 9,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 3,
          },
          graduationYears: {
            "5": 1,
            "6": 2,
            "7": 6,
          },
        },
        "2012": {
          total: 13,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 12,
            female: 1,
          },
          graduationYears: {
            "5": 3,
            "6": 5,
            "7": 4,
          },
        },
        "2013": {
          total: 77,
          statusBreakdown: {
            lulus: 76,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 50,
            female: 27,
          },
          graduationYears: {
            "4": 52,
            "5": 15,
            "6": 5,
            "7": 2,
            "8": 2,
          },
        },
        "2014": {
          total: 78,
          statusBreakdown: {
            lulus: 75,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 49,
            female: 29,
          },
          graduationYears: {
            "4": 60,
            "5": 14,
            "7": 1,
          },
        },
        "2015": {
          total: 79,
          statusBreakdown: {
            lulus: 76,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 61,
            female: 18,
          },
          graduationYears: {
            "4": 55,
            "5": 9,
            "6": 4,
            "7": 8,
          },
        },
        "2016": {
          total: 81,
          statusBreakdown: {
            lulus: 73,
            undurDiri: 5,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 62,
            female: 19,
          },
          graduationYears: {
            "4": 52,
            "5": 10,
            "6": 3,
            "7": 8,
          },
        },
        "2017": {
          total: 81,
          statusBreakdown: {
            lulus: 74,
            undurDiri: 6,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 59,
            female: 22,
          },
          graduationYears: {
            "4": 50,
            "5": 13,
            "6": 10,
            "7": 1,
          },
        },
        "2018": {
          total: 80,
          statusBreakdown: {
            lulus: 69,
            undurDiri: 2,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 58,
            female: 22,
          },
          graduationYears: {
            "4": 44,
            "5": 20,
            "6": 4,
            "7": 1,
          },
        },
        "2019": {
          total: 90,
          statusBreakdown: {
            lulus: 78,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 10,
          },
          genderBreakdown: {
            male: 60,
            female: 30,
          },
          graduationYears: {
            "4": 62,
            "5": 13,
            "6": 3,
          },
        },
        "2020": {
          total: 73,
          statusBreakdown: {
            lulus: 60,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 11,
          },
          genderBreakdown: {
            male: 48,
            female: 25,
          },
          graduationYears: {
            "4": 52,
            "5": 8,
          },
        },
        "2021": {
          total: 59,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 54,
          },
          genderBreakdown: {
            male: 45,
            female: 14,
          },
          graduationYears: {
            "4": 4,
          },
        },
        "2022": {
          total: 71,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 6,
            cuti: 0,
            other: 64,
          },
          genderBreakdown: {
            male: 43,
            female: 28,
          },
          graduationYears: {},
        },
        "2023": {
          total: 94,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 7,
            cuti: 0,
            other: 87,
          },
          genderBreakdown: {
            male: 61,
            female: 33,
          },
          graduationYears: {},
        },
        "2024": {
          total: 69,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 6,
            cuti: 0,
            other: 63,
          },
          genderBreakdown: {
            male: 46,
            female: 23,
          },
          graduationYears: {},
        },
      },
    },
    "157": {
      prodiCode: "157",
      prodiName: "Rekayasa Infrastruktur Lingkungan",
      total: 490,
      statusBreakdown: {
        lulus: 249,
        undurDiri: 23,
        dikeluarkan: 4,
        aktif: 24,
        cuti: 0,
        other: 190,
      },
      genderBreakdown: {
        male: 230,
        female: 260,
      },
      byBatch: {
        "2013": {
          total: 32,
          statusBreakdown: {
            lulus: 31,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 13,
            female: 19,
          },
          graduationYears: {
            "4": 22,
            "5": 8,
            "8": 1,
          },
        },
        "2014": {
          total: 25,
          statusBreakdown: {
            lulus: 25,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 9,
            female: 16,
          },
          graduationYears: {
            "4": 16,
            "5": 3,
            "6": 4,
            "7": 2,
          },
        },
        "2015": {
          total: 32,
          statusBreakdown: {
            lulus: 28,
            undurDiri: 3,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 14,
            female: 18,
          },
          graduationYears: {
            "4": 21,
            "5": 4,
            "6": 1,
            "7": 2,
          },
        },
        "2016": {
          total: 40,
          statusBreakdown: {
            lulus: 34,
            undurDiri: 4,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 20,
            female: 20,
          },
          graduationYears: {
            "4": 13,
            "5": 12,
            "6": 5,
            "7": 4,
          },
        },
        "2017": {
          total: 31,
          statusBreakdown: {
            lulus: 29,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 11,
            female: 20,
          },
          graduationYears: {
            "4": 14,
            "5": 10,
            "6": 4,
            "7": 1,
          },
        },
        "2018": {
          total: 35,
          statusBreakdown: {
            lulus: 34,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 20,
            female: 15,
          },
          graduationYears: {
            "4": 14,
            "5": 16,
            "6": 3,
            "7": 1,
          },
        },
        "2019": {
          total: 41,
          statusBreakdown: {
            lulus: 36,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 23,
            female: 18,
          },
          graduationYears: {
            "4": 28,
            "5": 8,
          },
        },
        "2020": {
          total: 36,
          statusBreakdown: {
            lulus: 24,
            undurDiri: 5,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 7,
          },
          genderBreakdown: {
            male: 19,
            female: 17,
          },
          graduationYears: {
            "4": 22,
            "5": 2,
          },
        },
        "2021": {
          total: 36,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 28,
          },
          genderBreakdown: {
            male: 15,
            female: 21,
          },
          graduationYears: {
            "4": 8,
          },
        },
        "2022": {
          total: 53,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 5,
            dikeluarkan: 0,
            aktif: 7,
            cuti: 0,
            other: 41,
          },
          genderBreakdown: {
            male: 25,
            female: 28,
          },
          graduationYears: {},
        },
        "2023": {
          total: 79,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 11,
            cuti: 0,
            other: 67,
          },
          genderBreakdown: {
            male: 38,
            female: 41,
          },
          graduationYears: {},
        },
        "2024": {
          total: 50,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 6,
            cuti: 0,
            other: 44,
          },
          genderBreakdown: {
            male: 23,
            female: 27,
          },
          graduationYears: {},
        },
      },
    },
    "158": {
      prodiCode: "158",
      prodiName: "Teknik dan Pengelolaan Sumber Daya Air",
      total: 476,
      statusBreakdown: {
        lulus: 303,
        undurDiri: 16,
        dikeluarkan: 5,
        aktif: 21,
        cuti: 0,
        other: 131,
      },
      genderBreakdown: {
        male: 331,
        female: 145,
      },
      byBatch: {
        "2013": {
          total: 39,
          statusBreakdown: {
            lulus: 38,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 30,
            female: 9,
          },
          graduationYears: {
            "4": 20,
            "5": 16,
            "6": 2,
          },
        },
        "2014": {
          total: 38,
          statusBreakdown: {
            lulus: 36,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 15,
            female: 23,
          },
          graduationYears: {
            "4": 26,
            "5": 6,
            "6": 2,
            "7": 2,
          },
        },
        "2015": {
          total: 40,
          statusBreakdown: {
            lulus: 36,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 32,
            female: 8,
          },
          graduationYears: {
            "4": 22,
            "5": 8,
            "6": 4,
            "7": 2,
          },
        },
        "2016": {
          total: 40,
          statusBreakdown: {
            lulus: 39,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 33,
            female: 7,
          },
          graduationYears: {
            "4": 21,
            "5": 13,
            "6": 2,
            "7": 3,
          },
        },
        "2017": {
          total: 39,
          statusBreakdown: {
            lulus: 33,
            undurDiri: 2,
            dikeluarkan: 4,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 25,
            female: 14,
          },
          graduationYears: {
            "4": 15,
            "5": 14,
            "6": 2,
            "7": 2,
          },
        },
        "2018": {
          total: 40,
          statusBreakdown: {
            lulus: 36,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 26,
            female: 14,
          },
          graduationYears: {
            "4": 27,
            "5": 5,
            "6": 3,
            "7": 1,
          },
        },
        "2019": {
          total: 40,
          statusBreakdown: {
            lulus: 37,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 30,
            female: 10,
          },
          graduationYears: {
            "4": 34,
            "5": 1,
            "6": 2,
          },
        },
        "2020": {
          total: 41,
          statusBreakdown: {
            lulus: 34,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 34,
            female: 7,
          },
          graduationYears: {
            "4": 33,
            "5": 1,
          },
        },
        "2021": {
          total: 41,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 27,
          },
          genderBreakdown: {
            male: 21,
            female: 20,
          },
          graduationYears: {
            "4": 14,
          },
        },
        "2022": {
          total: 55,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 11,
            cuti: 0,
            other: 44,
          },
          genderBreakdown: {
            male: 35,
            female: 20,
          },
          graduationYears: {},
        },
        "2023": {
          total: 41,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 9,
            cuti: 0,
            other: 32,
          },
          genderBreakdown: {
            male: 35,
            female: 6,
          },
          graduationYears: {},
        },
        "2024": {
          total: 22,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 21,
          },
          genderBreakdown: {
            male: 15,
            female: 7,
          },
          graduationYears: {},
        },
      },
    },
    "160": {
      prodiCode: "160",
      prodiName: "FMIPA",
      total: 613,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 41,
        dikeluarkan: 15,
        aktif: 484,
        cuti: 0,
        other: 73,
      },
      genderBreakdown: {
        male: 39,
        female: 574,
      },
      byBatch: {
        "1957": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "1976": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2016": {
          total: 4,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 0,
            female: 4,
          },
          graduationYears: {},
        },
        "2017": {
          total: 9,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 9,
          },
          genderBreakdown: {
            male: 0,
            female: 9,
          },
          graduationYears: {},
        },
        "2018": {
          total: 9,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 9,
          },
          genderBreakdown: {
            male: 0,
            female: 9,
          },
          graduationYears: {},
        },
        "2019": {
          total: 10,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 10,
          },
          genderBreakdown: {
            male: 0,
            female: 10,
          },
          graduationYears: {},
        },
        "2020": {
          total: 9,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 9,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 3,
          },
          graduationYears: {},
        },
        "2021": {
          total: 28,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 23,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 16,
            female: 12,
          },
          graduationYears: {},
        },
        "2022": {
          total: 28,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 4,
            dikeluarkan: 15,
            aktif: 0,
            cuti: 0,
            other: 9,
          },
          genderBreakdown: {
            male: 11,
            female: 17,
          },
          graduationYears: {},
        },
        "2023": {
          total: 10,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 5,
            female: 5,
          },
          graduationYears: {},
        },
        "2024": {
          total: 20,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 19,
          },
          genderBreakdown: {
            male: 1,
            female: 19,
          },
          graduationYears: {},
        },
        "2025": {
          total: 484,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 484,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 484,
          },
          graduationYears: {},
        },
      },
    },
    "161": {
      prodiCode: "161",
      prodiName: "SITH - Sains",
      total: 331,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 15,
        dikeluarkan: 5,
        aktif: 142,
        cuti: 0,
        other: 169,
      },
      genderBreakdown: {
        male: 10,
        female: 321,
      },
      byBatch: {
        "2017": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2018": {
          total: 3,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 0,
            female: 3,
          },
          graduationYears: {},
        },
        "2019": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2020": {
          total: 2,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {},
        },
        "2021": {
          total: 8,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 2,
            female: 6,
          },
          graduationYears: {},
        },
        "2022": {
          total: 14,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 4,
            dikeluarkan: 5,
            aktif: 0,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 4,
            female: 10,
          },
          graduationYears: {},
        },
        "2023": {
          total: 6,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 5,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 2,
            female: 4,
          },
          graduationYears: {},
        },
        "2024": {
          total: 154,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 154,
          },
          genderBreakdown: {
            male: 1,
            female: 153,
          },
          graduationYears: {},
        },
        "2025": {
          total: 142,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 142,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 142,
          },
          graduationYears: {},
        },
      },
    },
    "162": {
      prodiCode: "162",
      prodiName: "SF",
      total: 358,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 15,
        dikeluarkan: 4,
        aktif: 164,
        cuti: 0,
        other: 175,
      },
      genderBreakdown: {
        male: 1,
        female: 357,
      },
      byBatch: {
        "2016": {
          total: 7,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 7,
          },
          genderBreakdown: {
            male: 0,
            female: 7,
          },
          graduationYears: {},
        },
        "2017": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2018": {
          total: 4,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 0,
            female: 4,
          },
          graduationYears: {},
        },
        "2019": {
          total: 5,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 0,
            female: 5,
          },
          graduationYears: {},
        },
        "2020": {
          total: 10,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 10,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 9,
          },
          graduationYears: {},
        },
        "2021": {
          total: 9,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 3,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 0,
            female: 9,
          },
          graduationYears: {},
        },
        "2022": {
          total: 4,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 4,
          },
          graduationYears: {},
        },
        "2023": {
          total: 3,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 0,
            female: 3,
          },
          graduationYears: {},
        },
        "2024": {
          total: 151,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 150,
          },
          genderBreakdown: {
            male: 0,
            female: 151,
          },
          graduationYears: {},
        },
        "2025": {
          total: 164,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 164,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 164,
          },
          graduationYears: {},
        },
      },
    },
    "163": {
      prodiCode: "163",
      prodiName: "FITB",
      total: 545,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 48,
        dikeluarkan: 6,
        aktif: 447,
        cuti: 0,
        other: 44,
      },
      genderBreakdown: {
        male: 41,
        female: 504,
      },
      byBatch: {
        "2016": {
          total: 4,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 0,
            female: 4,
          },
          graduationYears: {},
        },
        "2017": {
          total: 3,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 0,
            female: 3,
          },
          graduationYears: {},
        },
        "2018": {
          total: 6,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 0,
            female: 6,
          },
          graduationYears: {},
        },
        "2019": {
          total: 10,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 10,
          },
          genderBreakdown: {
            male: 0,
            female: 10,
          },
          graduationYears: {},
        },
        "2020": {
          total: 16,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 15,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 12,
            female: 4,
          },
          graduationYears: {},
        },
        "2021": {
          total: 19,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 13,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 9,
            female: 10,
          },
          graduationYears: {},
        },
        "2022": {
          total: 21,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 13,
            dikeluarkan: 6,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 10,
            female: 11,
          },
          graduationYears: {},
        },
        "2023": {
          total: 7,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 6,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 7,
            female: 0,
          },
          graduationYears: {},
        },
        "2024": {
          total: 12,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 11,
          },
          genderBreakdown: {
            male: 3,
            female: 9,
          },
          graduationYears: {},
        },
        "2025": {
          total: 447,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 447,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 447,
          },
          graduationYears: {},
        },
      },
    },
    "164": {
      prodiCode: "164",
      prodiName: "FTTM",
      total: 624,
      statusBreakdown: {
        lulus: 1,
        undurDiri: 56,
        dikeluarkan: 10,
        aktif: 486,
        cuti: 0,
        other: 71,
      },
      genderBreakdown: {
        male: 72,
        female: 552,
      },
      byBatch: {
        "2016": {
          total: 5,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 1,
            female: 4,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2017": {
          total: 7,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 7,
          },
          genderBreakdown: {
            male: 0,
            female: 7,
          },
          graduationYears: {},
        },
        "2018": {
          total: 9,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 9,
          },
          genderBreakdown: {
            male: 0,
            female: 9,
          },
          graduationYears: {},
        },
        "2019": {
          total: 9,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 9,
          },
          genderBreakdown: {
            male: 0,
            female: 9,
          },
          graduationYears: {},
        },
        "2020": {
          total: 19,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 18,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 9,
            female: 10,
          },
          graduationYears: {},
        },
        "2021": {
          total: 23,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 18,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 16,
            female: 7,
          },
          graduationYears: {},
        },
        "2022": {
          total: 24,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 12,
            dikeluarkan: 10,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 20,
            female: 4,
          },
          graduationYears: {},
        },
        "2023": {
          total: 23,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 7,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 16,
          },
          genderBreakdown: {
            male: 20,
            female: 3,
          },
          graduationYears: {},
        },
        "2024": {
          total: 18,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 17,
          },
          genderBreakdown: {
            male: 6,
            female: 12,
          },
          graduationYears: {},
        },
        "2025": {
          total: 486,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 486,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 486,
          },
          graduationYears: {},
        },
        "2042": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
      },
    },
    "165": {
      prodiCode: "165",
      prodiName: "STEI - Rekayasa",
      total: 368,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 39,
        dikeluarkan: 6,
        aktif: 281,
        cuti: 0,
        other: 42,
      },
      genderBreakdown: {
        male: 41,
        female: 327,
      },
      byBatch: {
        "2016": {
          total: 6,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 0,
            female: 6,
          },
          graduationYears: {},
        },
        "2017": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2018": {
          total: 6,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 0,
            female: 6,
          },
          graduationYears: {},
        },
        "2019": {
          total: 10,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 10,
          },
          genderBreakdown: {
            male: 0,
            female: 10,
          },
          graduationYears: {},
        },
        "2020": {
          total: 15,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 15,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 12,
            female: 3,
          },
          graduationYears: {},
        },
        "2021": {
          total: 27,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 21,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 13,
            female: 14,
          },
          graduationYears: {},
        },
        "2022": {
          total: 11,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 2,
            dikeluarkan: 6,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 8,
            female: 3,
          },
          graduationYears: {},
        },
        "2023": {
          total: 8,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 7,
          },
          genderBreakdown: {
            male: 6,
            female: 2,
          },
          graduationYears: {},
        },
        "2024": {
          total: 3,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 2,
            female: 1,
          },
          graduationYears: {},
        },
        "2025": {
          total: 281,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 281,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 281,
          },
          graduationYears: {},
        },
      },
    },
    "166": {
      prodiCode: "166",
      prodiName: "FTSL",
      total: 578,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 44,
        dikeluarkan: 5,
        aktif: 463,
        cuti: 0,
        other: 66,
      },
      genderBreakdown: {
        male: 40,
        female: 538,
      },
      byBatch: {
        "2016": {
          total: 5,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 0,
            female: 5,
          },
          graduationYears: {},
        },
        "2017": {
          total: 7,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 7,
          },
          genderBreakdown: {
            male: 0,
            female: 7,
          },
          graduationYears: {},
        },
        "2018": {
          total: 12,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 12,
          },
          genderBreakdown: {
            male: 0,
            female: 12,
          },
          graduationYears: {},
        },
        "2019": {
          total: 7,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 7,
          },
          genderBreakdown: {
            male: 0,
            female: 7,
          },
          graduationYears: {},
        },
        "2020": {
          total: 15,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 14,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 10,
            female: 5,
          },
          graduationYears: {},
        },
        "2021": {
          total: 24,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 16,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 8,
          },
          genderBreakdown: {
            male: 10,
            female: 14,
          },
          graduationYears: {},
        },
        "2022": {
          total: 11,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 5,
            dikeluarkan: 5,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 7,
            female: 4,
          },
          graduationYears: {},
        },
        "2023": {
          total: 9,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 5,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 5,
            female: 4,
          },
          graduationYears: {},
        },
        "2024": {
          total: 25,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 21,
          },
          genderBreakdown: {
            male: 8,
            female: 17,
          },
          graduationYears: {},
        },
        "2025": {
          total: 463,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 463,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 463,
          },
          graduationYears: {},
        },
      },
    },
    "167": {
      prodiCode: "167",
      prodiName: "FTI",
      total: 736,
      statusBreakdown: {
        lulus: 1,
        undurDiri: 51,
        dikeluarkan: 2,
        aktif: 600,
        cuti: 0,
        other: 82,
      },
      genderBreakdown: {
        male: 41,
        female: 695,
      },
      byBatch: {
        "2016": {
          total: 7,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 7,
          },
          genderBreakdown: {
            male: 0,
            female: 7,
          },
          graduationYears: {},
        },
        "2017": {
          total: 7,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 7,
          },
          genderBreakdown: {
            male: 0,
            female: 7,
          },
          graduationYears: {},
        },
        "2018": {
          total: 7,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 7,
          },
          genderBreakdown: {
            male: 0,
            female: 7,
          },
          graduationYears: {},
        },
        "2019": {
          total: 13,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 13,
          },
          genderBreakdown: {
            male: 0,
            female: 13,
          },
          graduationYears: {},
        },
        "2020": {
          total: 9,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 8,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 4,
            female: 5,
          },
          graduationYears: {},
        },
        "2021": {
          total: 33,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 21,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 11,
          },
          genderBreakdown: {
            male: 11,
            female: 22,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2022": {
          total: 23,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 14,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 7,
          },
          genderBreakdown: {
            male: 12,
            female: 11,
          },
          graduationYears: {},
        },
        "2023": {
          total: 17,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 6,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 11,
          },
          genderBreakdown: {
            male: 10,
            female: 7,
          },
          graduationYears: {},
        },
        "2024": {
          total: 20,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 18,
          },
          genderBreakdown: {
            male: 4,
            female: 16,
          },
          graduationYears: {},
        },
        "2025": {
          total: 600,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 600,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 600,
          },
          graduationYears: {},
        },
      },
    },
    "168": {
      prodiCode: "168",
      prodiName: "FSRD",
      total: 512,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 12,
        dikeluarkan: 1,
        aktif: 460,
        cuti: 0,
        other: 39,
      },
      genderBreakdown: {
        male: 5,
        female: 507,
      },
      byBatch: {
        "2016": {
          total: 4,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 0,
            female: 4,
          },
          graduationYears: {},
        },
        "2017": {
          total: 10,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 10,
          },
          genderBreakdown: {
            male: 0,
            female: 10,
          },
          graduationYears: {},
        },
        "2019": {
          total: 3,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 0,
            female: 3,
          },
          graduationYears: {},
        },
        "2020": {
          total: 5,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 5,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 3,
          },
          graduationYears: {},
        },
        "2021": {
          total: 10,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 2,
            female: 8,
          },
          graduationYears: {},
        },
        "2022": {
          total: 9,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 0,
            female: 9,
          },
          graduationYears: {},
        },
        "2024": {
          total: 11,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 10,
          },
          genderBreakdown: {
            male: 1,
            female: 10,
          },
          graduationYears: {},
        },
        "2025": {
          total: 460,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 460,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 460,
          },
          graduationYears: {},
        },
      },
    },
    "169": {
      prodiCode: "169",
      prodiName: "FTMD",
      total: 502,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 34,
        dikeluarkan: 5,
        aktif: 395,
        cuti: 0,
        other: 68,
      },
      genderBreakdown: {
        male: 34,
        female: 468,
      },
      byBatch: {
        "2016": {
          total: 5,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 0,
            female: 5,
          },
          graduationYears: {},
        },
        "2017": {
          total: 5,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 0,
            female: 5,
          },
          graduationYears: {},
        },
        "2018": {
          total: 4,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 0,
            female: 4,
          },
          graduationYears: {},
        },
        "2019": {
          total: 8,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 8,
          },
          genderBreakdown: {
            male: 0,
            female: 8,
          },
          graduationYears: {},
        },
        "2020": {
          total: 18,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 18,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 17,
            female: 1,
          },
          graduationYears: {},
        },
        "2021": {
          total: 26,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 8,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 18,
          },
          genderBreakdown: {
            male: 6,
            female: 20,
          },
          graduationYears: {},
        },
        "2022": {
          total: 20,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 7,
            dikeluarkan: 5,
            aktif: 0,
            cuti: 0,
            other: 8,
          },
          genderBreakdown: {
            male: 8,
            female: 12,
          },
          graduationYears: {},
        },
        "2023": {
          total: 3,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 3,
            female: 0,
          },
          graduationYears: {},
        },
        "2024": {
          total: 18,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 18,
          },
          genderBreakdown: {
            male: 0,
            female: 18,
          },
          graduationYears: {},
        },
        "2025": {
          total: 395,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 395,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 395,
          },
          graduationYears: {},
        },
      },
    },
    "170": {
      prodiCode: "170",
      prodiName: "Seni Rupa",
      total: 597,
      statusBreakdown: {
        lulus: 273,
        undurDiri: 38,
        dikeluarkan: 9,
        aktif: 12,
        cuti: 0,
        other: 265,
      },
      genderBreakdown: {
        male: 174,
        female: 423,
      },
      byBatch: {
        "1997": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2003": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2005": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2011": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 0,
          },
          graduationYears: {
            "6": 2,
          },
        },
        "2012": {
          total: 14,
          statusBreakdown: {
            lulus: 11,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 6,
          },
          graduationYears: {
            "5": 4,
            "6": 6,
            "7": 1,
          },
        },
        "2013": {
          total: 40,
          statusBreakdown: {
            lulus: 38,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 19,
            female: 21,
          },
          graduationYears: {
            "4": 5,
            "5": 21,
            "6": 11,
            "7": 1,
          },
        },
        "2014": {
          total: 38,
          statusBreakdown: {
            lulus: 35,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 18,
            female: 20,
          },
          graduationYears: {
            "4": 8,
            "5": 17,
            "6": 6,
            "7": 4,
          },
        },
        "2015": {
          total: 37,
          statusBreakdown: {
            lulus: 30,
            undurDiri: 6,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 13,
            female: 24,
          },
          graduationYears: {
            "4": 3,
            "5": 15,
            "6": 4,
            "7": 8,
          },
        },
        "2016": {
          total: 34,
          statusBreakdown: {
            lulus: 25,
            undurDiri: 7,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 13,
            female: 21,
          },
          graduationYears: {
            "4": 1,
            "5": 14,
            "6": 5,
            "7": 5,
          },
        },
        "2017": {
          total: 37,
          statusBreakdown: {
            lulus: 28,
            undurDiri: 7,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 11,
            female: 26,
          },
          graduationYears: {
            "4": 1,
            "5": 19,
            "6": 5,
            "7": 3,
          },
        },
        "2018": {
          total: 45,
          statusBreakdown: {
            lulus: 35,
            undurDiri: 1,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 7,
          },
          genderBreakdown: {
            male: 13,
            female: 32,
          },
          graduationYears: {
            "4": 5,
            "5": 28,
            "6": 2,
          },
        },
        "2019": {
          total: 40,
          statusBreakdown: {
            lulus: 27,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 11,
          },
          genderBreakdown: {
            male: 8,
            female: 32,
          },
          graduationYears: {
            "4": 20,
            "5": 6,
            "6": 1,
          },
        },
        "2020": {
          total: 53,
          statusBreakdown: {
            lulus: 36,
            undurDiri: 5,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 12,
          },
          genderBreakdown: {
            male: 12,
            female: 41,
          },
          graduationYears: {
            "4": 35,
            "5": 1,
          },
        },
        "2021": {
          total: 51,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 46,
          },
          genderBreakdown: {
            male: 10,
            female: 41,
          },
          graduationYears: {
            "4": 3,
          },
        },
        "2022": {
          total: 61,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 6,
            cuti: 0,
            other: 53,
          },
          genderBreakdown: {
            male: 13,
            female: 48,
          },
          graduationYears: {},
        },
        "2023": {
          total: 88,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 85,
          },
          genderBreakdown: {
            male: 24,
            female: 64,
          },
          graduationYears: {},
        },
        "2024": {
          total: 54,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 51,
          },
          genderBreakdown: {
            male: 8,
            female: 46,
          },
          graduationYears: {},
        },
      },
    },
    "172": {
      prodiCode: "172",
      prodiName: "Kriya",
      total: 725,
      statusBreakdown: {
        lulus: 384,
        undurDiri: 15,
        dikeluarkan: 11,
        aktif: 22,
        cuti: 0,
        other: 293,
      },
      genderBreakdown: {
        male: 136,
        female: 589,
      },
      byBatch: {
        "2003": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2011": {
          total: 4,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 1,
          },
          graduationYears: {
            "6": 4,
          },
        },
        "2012": {
          total: 5,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 3,
          },
          graduationYears: {
            "5": 1,
            "6": 3,
          },
        },
        "2013": {
          total: 33,
          statusBreakdown: {
            lulus: 29,
            undurDiri: 1,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 27,
          },
          graduationYears: {
            "4": 21,
            "5": 6,
            "7": 1,
            "8": 1,
          },
        },
        "2014": {
          total: 29,
          statusBreakdown: {
            lulus: 28,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 24,
          },
          graduationYears: {
            "4": 24,
            "5": 2,
            "6": 1,
            "7": 1,
          },
        },
        "2015": {
          total: 24,
          statusBreakdown: {
            lulus: 24,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 23,
          },
          graduationYears: {
            "4": 19,
            "5": 4,
            "6": 1,
          },
        },
        "2016": {
          total: 60,
          statusBreakdown: {
            lulus: 58,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 16,
            female: 44,
          },
          graduationYears: {
            "4": 53,
            "5": 1,
            "6": 3,
            "7": 1,
          },
        },
        "2017": {
          total: 52,
          statusBreakdown: {
            lulus: 49,
            undurDiri: 1,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 10,
            female: 42,
          },
          graduationYears: {
            "4": 43,
            "5": 5,
            "7": 1,
          },
        },
        "2018": {
          total: 67,
          statusBreakdown: {
            lulus: 58,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 14,
            female: 53,
          },
          graduationYears: {
            "4": 39,
            "5": 12,
            "6": 5,
            "7": 2,
          },
        },
        "2019": {
          total: 52,
          statusBreakdown: {
            lulus: 48,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 10,
            female: 42,
          },
          graduationYears: {
            "4": 41,
            "5": 7,
          },
        },
        "2020": {
          total: 41,
          statusBreakdown: {
            lulus: 34,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 5,
            female: 36,
          },
          graduationYears: {
            "4": 33,
            "5": 1,
          },
        },
        "2021": {
          total: 68,
          statusBreakdown: {
            lulus: 47,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 21,
          },
          genderBreakdown: {
            male: 13,
            female: 55,
          },
          graduationYears: {
            "4": 47,
          },
        },
        "2022": {
          total: 105,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 3,
            aktif: 10,
            cuti: 0,
            other: 91,
          },
          genderBreakdown: {
            male: 23,
            female: 82,
          },
          graduationYears: {},
        },
        "2023": {
          total: 98,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 5,
            cuti: 0,
            other: 91,
          },
          genderBreakdown: {
            male: 15,
            female: 83,
          },
          graduationYears: {},
        },
        "2024": {
          total: 86,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 7,
            cuti: 0,
            other: 79,
          },
          genderBreakdown: {
            male: 13,
            female: 73,
          },
          graduationYears: {},
        },
      },
    },
    "173": {
      prodiCode: "173",
      prodiName: "Desain Interior",
      total: 645,
      statusBreakdown: {
        lulus: 394,
        undurDiri: 17,
        dikeluarkan: 9,
        aktif: 12,
        cuti: 0,
        other: 213,
      },
      genderBreakdown: {
        male: 195,
        female: 450,
      },
      byBatch: {
        "2003": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2011": {
          total: 4,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 1,
          },
          graduationYears: {
            "6": 3,
          },
        },
        "2012": {
          total: 7,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 1,
          },
          graduationYears: {
            "5": 2,
            "6": 1,
            "7": 3,
          },
        },
        "2013": {
          total: 48,
          statusBreakdown: {
            lulus: 46,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 18,
            female: 30,
          },
          graduationYears: {
            "4": 29,
            "5": 11,
            "6": 5,
            "7": 1,
          },
        },
        "2014": {
          total: 47,
          statusBreakdown: {
            lulus: 46,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 13,
            female: 34,
          },
          graduationYears: {
            "4": 36,
            "5": 10,
          },
        },
        "2015": {
          total: 42,
          statusBreakdown: {
            lulus: 36,
            undurDiri: 6,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 20,
            female: 22,
          },
          graduationYears: {
            "4": 30,
            "5": 2,
            "6": 3,
            "7": 1,
          },
        },
        "2016": {
          total: 49,
          statusBreakdown: {
            lulus: 40,
            undurDiri: 6,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 21,
            female: 28,
          },
          graduationYears: {
            "4": 25,
            "5": 9,
            "6": 2,
            "7": 4,
          },
        },
        "2017": {
          total: 55,
          statusBreakdown: {
            lulus: 53,
            undurDiri: 0,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 19,
            female: 36,
          },
          graduationYears: {
            "4": 49,
            "5": 2,
            "6": 1,
            "7": 1,
          },
        },
        "2018": {
          total: 53,
          statusBreakdown: {
            lulus: 46,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 13,
            female: 40,
          },
          graduationYears: {
            "4": 39,
            "5": 5,
            "6": 1,
            "7": 1,
          },
        },
        "2019": {
          total: 49,
          statusBreakdown: {
            lulus: 38,
            undurDiri: 0,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 9,
          },
          genderBreakdown: {
            male: 15,
            female: 34,
          },
          graduationYears: {
            "4": 34,
            "5": 3,
            "6": 1,
          },
        },
        "2020": {
          total: 54,
          statusBreakdown: {
            lulus: 47,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 10,
            female: 44,
          },
          graduationYears: {
            "4": 45,
            "5": 2,
          },
        },
        "2021": {
          total: 51,
          statusBreakdown: {
            lulus: 32,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 19,
          },
          genderBreakdown: {
            male: 10,
            female: 41,
          },
          graduationYears: {
            "4": 32,
          },
        },
        "2022": {
          total: 63,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 60,
          },
          genderBreakdown: {
            male: 15,
            female: 48,
          },
          graduationYears: {},
        },
        "2023": {
          total: 66,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 0,
            other: 64,
          },
          genderBreakdown: {
            male: 17,
            female: 49,
          },
          graduationYears: {},
        },
        "2024": {
          total: 56,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 7,
            cuti: 0,
            other: 49,
          },
          genderBreakdown: {
            male: 15,
            female: 41,
          },
          graduationYears: {},
        },
      },
    },
    "174": {
      prodiCode: "174",
      prodiName: "Desain Komunikasi Visual",
      total: 1020,
      statusBreakdown: {
        lulus: 593,
        undurDiri: 6,
        dikeluarkan: 1,
        aktif: 38,
        cuti: 0,
        other: 382,
      },
      genderBreakdown: {
        male: 216,
        female: 804,
      },
      byBatch: {
        "2006": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2011": {
          total: 3,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 1,
          },
          graduationYears: {
            "6": 2,
          },
        },
        "2012": {
          total: 4,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 1,
          },
          graduationYears: {
            "5": 1,
            "6": 2,
            "7": 1,
          },
        },
        "2013": {
          total: 49,
          statusBreakdown: {
            lulus: 49,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 15,
            female: 34,
          },
          graduationYears: {
            "4": 49,
          },
        },
        "2014": {
          total: 49,
          statusBreakdown: {
            lulus: 48,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 14,
            female: 35,
          },
          graduationYears: {
            "4": 42,
            "5": 3,
            "6": 1,
            "7": 2,
          },
        },
        "2015": {
          total: 52,
          statusBreakdown: {
            lulus: 51,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 22,
            female: 30,
          },
          graduationYears: {
            "4": 47,
            "5": 3,
            "6": 1,
          },
        },
        "2016": {
          total: 63,
          statusBreakdown: {
            lulus: 62,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 13,
            female: 50,
          },
          graduationYears: {
            "4": 45,
            "5": 9,
            "6": 3,
            "7": 5,
          },
        },
        "2017": {
          total: 67,
          statusBreakdown: {
            lulus: 67,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 12,
            female: 55,
          },
          graduationYears: {
            "4": 48,
            "5": 10,
            "6": 7,
            "7": 2,
          },
        },
        "2018": {
          total: 71,
          statusBreakdown: {
            lulus: 70,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 11,
            female: 60,
          },
          graduationYears: {
            "4": 64,
            "5": 5,
            "6": 1,
          },
        },
        "2019": {
          total: 73,
          statusBreakdown: {
            lulus: 72,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 11,
            female: 62,
          },
          graduationYears: {
            "4": 67,
            "5": 5,
          },
        },
        "2020": {
          total: 75,
          statusBreakdown: {
            lulus: 70,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 7,
            female: 68,
          },
          graduationYears: {
            "4": 70,
          },
        },
        "2021": {
          total: 107,
          statusBreakdown: {
            lulus: 97,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 9,
          },
          genderBreakdown: {
            male: 19,
            female: 88,
          },
          graduationYears: {
            "4": 97,
          },
        },
        "2022": {
          total: 118,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 20,
            cuti: 0,
            other: 97,
          },
          genderBreakdown: {
            male: 25,
            female: 93,
          },
          graduationYears: {},
        },
        "2023": {
          total: 153,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 10,
            cuti: 0,
            other: 142,
          },
          genderBreakdown: {
            male: 32,
            female: 121,
          },
          graduationYears: {},
        },
        "2024": {
          total: 135,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 8,
            cuti: 0,
            other: 127,
          },
          genderBreakdown: {
            male: 30,
            female: 105,
          },
          graduationYears: {},
        },
      },
    },
    "175": {
      prodiCode: "175",
      prodiName: "Desain Produk",
      total: 707,
      statusBreakdown: {
        lulus: 356,
        undurDiri: 16,
        dikeluarkan: 4,
        aktif: 21,
        cuti: 0,
        other: 310,
      },
      genderBreakdown: {
        male: 282,
        female: 425,
      },
      byBatch: {
        "2011": {
          total: 3,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 1,
          },
          graduationYears: {},
        },
        "2012": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 0,
          },
          graduationYears: {
            "6": 1,
            "7": 1,
          },
        },
        "2013": {
          total: 45,
          statusBreakdown: {
            lulus: 44,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 21,
            female: 24,
          },
          graduationYears: {
            "4": 34,
            "5": 4,
            "6": 5,
            "7": 1,
          },
        },
        "2014": {
          total: 47,
          statusBreakdown: {
            lulus: 43,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 24,
            female: 23,
          },
          graduationYears: {
            "4": 26,
            "5": 14,
            "6": 3,
          },
        },
        "2015": {
          total: 51,
          statusBreakdown: {
            lulus: 50,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 30,
            female: 21,
          },
          graduationYears: {
            "4": 37,
            "5": 6,
            "6": 3,
            "7": 4,
          },
        },
        "2016": {
          total: 51,
          statusBreakdown: {
            lulus: 50,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 23,
            female: 28,
          },
          graduationYears: {
            "4": 29,
            "5": 13,
            "6": 7,
            "7": 1,
          },
        },
        "2017": {
          total: 54,
          statusBreakdown: {
            lulus: 49,
            undurDiri: 4,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 28,
            female: 26,
          },
          graduationYears: {
            "4": 39,
            "5": 8,
            "6": 2,
          },
        },
        "2018": {
          total: 50,
          statusBreakdown: {
            lulus: 45,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 24,
            female: 26,
          },
          graduationYears: {
            "4": 34,
            "5": 7,
            "6": 4,
          },
        },
        "2019": {
          total: 50,
          statusBreakdown: {
            lulus: 42,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 20,
            female: 30,
          },
          graduationYears: {
            "4": 36,
            "5": 6,
          },
        },
        "2020": {
          total: 38,
          statusBreakdown: {
            lulus: 31,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 7,
          },
          genderBreakdown: {
            male: 10,
            female: 28,
          },
          graduationYears: {
            "4": 31,
          },
        },
        "2021": {
          total: 47,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 46,
          },
          genderBreakdown: {
            male: 20,
            female: 27,
          },
          graduationYears: {},
        },
        "2022": {
          total: 89,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 6,
            cuti: 0,
            other: 83,
          },
          genderBreakdown: {
            male: 30,
            female: 59,
          },
          graduationYears: {},
        },
        "2023": {
          total: 100,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 7,
            cuti: 0,
            other: 93,
          },
          genderBreakdown: {
            male: 26,
            female: 74,
          },
          graduationYears: {},
        },
        "2024": {
          total: 80,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 8,
            cuti: 0,
            other: 72,
          },
          genderBreakdown: {
            male: 22,
            female: 58,
          },
          graduationYears: {},
        },
      },
    },
    "180": {
      prodiCode: "180",
      prodiName: "Teknik Tenaga Listrik",
      total: 504,
      statusBreakdown: {
        lulus: 289,
        undurDiri: 19,
        dikeluarkan: 3,
        aktif: 11,
        cuti: 0,
        other: 182,
      },
      genderBreakdown: {
        male: 418,
        female: 86,
      },
      byBatch: {
        "1961": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2011": {
          total: 4,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 0,
          },
          graduationYears: {
            "6": 3,
          },
        },
        "2012": {
          total: 4,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 1,
          },
          graduationYears: {
            "5": 2,
            "6": 2,
          },
        },
        "2013": {
          total: 46,
          statusBreakdown: {
            lulus: 46,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 39,
            female: 7,
          },
          graduationYears: {
            "4": 38,
            "5": 7,
            "7": 1,
          },
        },
        "2014": {
          total: 45,
          statusBreakdown: {
            lulus: 45,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 40,
            female: 5,
          },
          graduationYears: {
            "4": 34,
            "5": 9,
            "6": 2,
          },
        },
        "2015": {
          total: 35,
          statusBreakdown: {
            lulus: 35,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 31,
            female: 4,
          },
          graduationYears: {
            "4": 28,
            "5": 4,
            "6": 2,
            "7": 1,
          },
        },
        "2016": {
          total: 33,
          statusBreakdown: {
            lulus: 31,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 30,
            female: 3,
          },
          graduationYears: {
            "4": 26,
            "5": 5,
          },
        },
        "2017": {
          total: 43,
          statusBreakdown: {
            lulus: 39,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 39,
            female: 4,
          },
          graduationYears: {
            "4": 32,
            "5": 2,
            "6": 5,
          },
        },
        "2018": {
          total: 40,
          statusBreakdown: {
            lulus: 35,
            undurDiri: 3,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 31,
            female: 9,
          },
          graduationYears: {
            "4": 23,
            "5": 7,
            "6": 5,
          },
        },
        "2019": {
          total: 32,
          statusBreakdown: {
            lulus: 22,
            undurDiri: 7,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 25,
            female: 7,
          },
          graduationYears: {
            "4": 17,
            "5": 3,
            "6": 2,
          },
        },
        "2020": {
          total: 24,
          statusBreakdown: {
            lulus: 20,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 21,
            female: 3,
          },
          graduationYears: {
            "4": 20,
          },
        },
        "2021": {
          total: 15,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 7,
          },
          genderBreakdown: {
            male: 14,
            female: 1,
          },
          graduationYears: {
            "4": 8,
          },
        },
        "2022": {
          total: 54,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 4,
            cuti: 0,
            other: 47,
          },
          genderBreakdown: {
            male: 41,
            female: 13,
          },
          graduationYears: {},
        },
        "2023": {
          total: 62,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 58,
          },
          genderBreakdown: {
            male: 45,
            female: 17,
          },
          graduationYears: {},
        },
        "2024": {
          total: 65,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 4,
            cuti: 0,
            other: 61,
          },
          genderBreakdown: {
            male: 55,
            female: 10,
          },
          graduationYears: {},
        },
        "2031": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
      },
    },
    "181": {
      prodiCode: "181",
      prodiName: "Teknik Telekomunikasi",
      total: 561,
      statusBreakdown: {
        lulus: 318,
        undurDiri: 22,
        dikeluarkan: 4,
        aktif: 9,
        cuti: 0,
        other: 208,
      },
      genderBreakdown: {
        male: 411,
        female: 150,
      },
      byBatch: {
        "2011": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "6": 1,
          },
        },
        "2012": {
          total: 3,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 1,
          },
          graduationYears: {
            "5": 1,
            "6": 1,
          },
        },
        "2013": {
          total: 27,
          statusBreakdown: {
            lulus: 25,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 14,
            female: 13,
          },
          graduationYears: {
            "4": 12,
            "5": 7,
            "6": 6,
          },
        },
        "2014": {
          total: 28,
          statusBreakdown: {
            lulus: 27,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 16,
            female: 12,
          },
          graduationYears: {
            "4": 24,
            "5": 3,
          },
        },
        "2015": {
          total: 44,
          statusBreakdown: {
            lulus: 42,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 35,
            female: 9,
          },
          graduationYears: {
            "4": 34,
            "5": 4,
            "6": 4,
          },
        },
        "2016": {
          total: 32,
          statusBreakdown: {
            lulus: 31,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 21,
            female: 11,
          },
          graduationYears: {
            "4": 26,
            "5": 5,
          },
        },
        "2017": {
          total: 38,
          statusBreakdown: {
            lulus: 37,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 29,
            female: 9,
          },
          graduationYears: {
            "4": 27,
            "5": 8,
            "6": 1,
            "7": 1,
          },
        },
        "2018": {
          total: 42,
          statusBreakdown: {
            lulus: 39,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 32,
            female: 10,
          },
          graduationYears: {
            "4": 32,
            "5": 5,
            "6": 2,
          },
        },
        "2019": {
          total: 37,
          statusBreakdown: {
            lulus: 34,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 31,
            female: 6,
          },
          graduationYears: {
            "4": 26,
            "5": 7,
            "6": 1,
          },
        },
        "2020": {
          total: 81,
          statusBreakdown: {
            lulus: 58,
            undurDiri: 9,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 14,
          },
          genderBreakdown: {
            male: 62,
            female: 19,
          },
          graduationYears: {
            "4": 53,
            "5": 5,
          },
        },
        "2021": {
          total: 63,
          statusBreakdown: {
            lulus: 22,
            undurDiri: 2,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 37,
          },
          genderBreakdown: {
            male: 45,
            female: 18,
          },
          graduationYears: {
            "4": 22,
          },
        },
        "2022": {
          total: 56,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 52,
          },
          genderBreakdown: {
            male: 39,
            female: 17,
          },
          graduationYears: {},
        },
        "2023": {
          total: 62,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 5,
            cuti: 0,
            other: 56,
          },
          genderBreakdown: {
            male: 46,
            female: 16,
          },
          graduationYears: {},
        },
        "2024": {
          total: 47,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 46,
          },
          genderBreakdown: {
            male: 38,
            female: 9,
          },
          graduationYears: {},
        },
      },
    },
    "182": {
      prodiCode: "182",
      prodiName: "Sistem dan Teknologi Informasi",
      total: 1103,
      statusBreakdown: {
        lulus: 514,
        undurDiri: 28,
        dikeluarkan: 6,
        aktif: 30,
        cuti: 0,
        other: 525,
      },
      genderBreakdown: {
        male: 759,
        female: 344,
      },
      byBatch: {
        "2011": {
          total: 7,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 1,
          },
          graduationYears: {
            "6": 5,
          },
        },
        "2012": {
          total: 7,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 2,
          },
          graduationYears: {
            "5": 4,
            "6": 2,
            "7": 1,
          },
        },
        "2013": {
          total: 39,
          statusBreakdown: {
            lulus: 36,
            undurDiri: 1,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 22,
            female: 17,
          },
          graduationYears: {
            "4": 27,
            "5": 3,
            "6": 3,
            "7": 2,
            "8": 1,
          },
        },
        "2014": {
          total: 50,
          statusBreakdown: {
            lulus: 49,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 32,
            female: 18,
          },
          graduationYears: {
            "4": 36,
            "5": 6,
            "7": 7,
          },
        },
        "2015": {
          total: 45,
          statusBreakdown: {
            lulus: 40,
            undurDiri: 5,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 31,
            female: 14,
          },
          graduationYears: {
            "4": 26,
            "5": 8,
            "6": 4,
            "7": 2,
          },
        },
        "2016": {
          total: 52,
          statusBreakdown: {
            lulus: 42,
            undurDiri: 9,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 42,
            female: 10,
          },
          graduationYears: {
            "4": 17,
            "5": 16,
            "6": 5,
            "7": 4,
          },
        },
        "2017": {
          total: 49,
          statusBreakdown: {
            lulus: 43,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 37,
            female: 12,
          },
          graduationYears: {
            "4": 28,
            "5": 7,
            "6": 5,
            "7": 3,
          },
        },
        "2018": {
          total: 50,
          statusBreakdown: {
            lulus: 46,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 29,
            female: 21,
          },
          graduationYears: {
            "4": 38,
            "5": 5,
            "6": 2,
            "7": 1,
          },
        },
        "2019": {
          total: 118,
          statusBreakdown: {
            lulus: 95,
            undurDiri: 5,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 18,
          },
          genderBreakdown: {
            male: 83,
            female: 35,
          },
          graduationYears: {
            "4": 86,
            "5": 9,
          },
        },
        "2020": {
          total: 114,
          statusBreakdown: {
            lulus: 102,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 12,
          },
          genderBreakdown: {
            male: 83,
            female: 31,
          },
          graduationYears: {
            "4": 98,
            "5": 4,
          },
        },
        "2021": {
          total: 164,
          statusBreakdown: {
            lulus: 49,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 114,
          },
          genderBreakdown: {
            male: 113,
            female: 51,
          },
          graduationYears: {
            "4": 49,
          },
        },
        "2022": {
          total: 142,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 9,
            cuti: 0,
            other: 130,
          },
          genderBreakdown: {
            male: 101,
            female: 41,
          },
          graduationYears: {},
        },
        "2023": {
          total: 143,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 10,
            cuti: 0,
            other: 133,
          },
          genderBreakdown: {
            male: 97,
            female: 46,
          },
          graduationYears: {},
        },
        "2024": {
          total: 123,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 10,
            cuti: 0,
            other: 113,
          },
          genderBreakdown: {
            male: 78,
            female: 45,
          },
          graduationYears: {},
        },
      },
    },
    "183": {
      prodiCode: "183",
      prodiName: "Teknik Biomedis",
      total: 328,
      statusBreakdown: {
        lulus: 189,
        undurDiri: 13,
        dikeluarkan: 3,
        aktif: 8,
        cuti: 0,
        other: 115,
      },
      genderBreakdown: {
        male: 144,
        female: 184,
      },
      byBatch: {
        "2012": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2015": {
          total: 34,
          statusBreakdown: {
            lulus: 31,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 17,
            female: 17,
          },
          graduationYears: {
            "4": 19,
            "5": 8,
            "6": 4,
          },
        },
        "2016": {
          total: 32,
          statusBreakdown: {
            lulus: 30,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 12,
            female: 20,
          },
          graduationYears: {
            "4": 23,
            "5": 5,
            "6": 2,
          },
        },
        "2017": {
          total: 35,
          statusBreakdown: {
            lulus: 34,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 19,
            female: 16,
          },
          graduationYears: {
            "4": 26,
            "5": 4,
            "6": 4,
          },
        },
        "2018": {
          total: 45,
          statusBreakdown: {
            lulus: 38,
            undurDiri: 3,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 17,
            female: 28,
          },
          graduationYears: {
            "4": 24,
            "5": 8,
            "6": 3,
            "7": 3,
          },
        },
        "2019": {
          total: 41,
          statusBreakdown: {
            lulus: 33,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 15,
            female: 26,
          },
          graduationYears: {
            "4": 24,
            "5": 9,
          },
        },
        "2020": {
          total: 42,
          statusBreakdown: {
            lulus: 22,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 19,
          },
          genderBreakdown: {
            male: 19,
            female: 23,
          },
          graduationYears: {
            "4": 17,
            "5": 5,
          },
        },
        "2021": {
          total: 21,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 19,
          },
          genderBreakdown: {
            male: 9,
            female: 12,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2022": {
          total: 29,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 6,
            cuti: 0,
            other: 23,
          },
          genderBreakdown: {
            male: 17,
            female: 12,
          },
          graduationYears: {},
        },
        "2023": {
          total: 27,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 0,
            other: 25,
          },
          genderBreakdown: {
            male: 13,
            female: 14,
          },
          graduationYears: {},
        },
        "2024": {
          total: 21,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 21,
          },
          genderBreakdown: {
            male: 6,
            female: 15,
          },
          graduationYears: {},
        },
      },
    },
    "185": {
      prodiCode: "185",
      prodiName: "Unknown Prodi",
      total: 1,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 1,
      },
      genderBreakdown: {
        male: 0,
        female: 1,
      },
      byBatch: {
        "2021": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
      },
    },
    "190": {
      prodiCode: "190",
      prodiName: "Manajemen",
      total: 2948,
      statusBreakdown: {
        lulus: 1883,
        undurDiri: 35,
        dikeluarkan: 9,
        aktif: 21,
        cuti: 0,
        other: 1000,
      },
      genderBreakdown: {
        male: 1307,
        female: 1641,
      },
      byBatch: {
        "2006": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 2,
          },
          graduationYears: {
            "6": 1,
          },
        },
        "2007": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 2,
          },
          graduationYears: {},
        },
        "2008": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2009": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2010": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2011": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2012": {
          total: 3,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 1,
          },
          graduationYears: {
            "3": 1,
            "7": 1,
          },
        },
        "2013": {
          total: 13,
          statusBreakdown: {
            lulus: 13,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 13,
            female: 0,
          },
          graduationYears: {
            "4": 6,
            "5": 3,
            "6": 2,
            "7": 1,
            "8": 1,
          },
        },
        "2014": {
          total: 190,
          statusBreakdown: {
            lulus: 184,
            undurDiri: 3,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 78,
            female: 112,
          },
          graduationYears: {
            "3": 155,
            "4": 22,
            "5": 4,
            "7": 3,
          },
        },
        "2015": {
          total: 234,
          statusBreakdown: {
            lulus: 233,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 94,
            female: 140,
          },
          graduationYears: {
            "3": 198,
            "4": 25,
            "5": 5,
            "6": 2,
            "7": 3,
          },
        },
        "2016": {
          total: 40,
          statusBreakdown: {
            lulus: 37,
            undurDiri: 1,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 25,
            female: 15,
          },
          graduationYears: {
            "3": 4,
            "4": 26,
            "5": 4,
            "7": 3,
          },
        },
        "2017": {
          total: 312,
          statusBreakdown: {
            lulus: 304,
            undurDiri: 6,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 142,
            female: 170,
          },
          graduationYears: {
            "3": 247,
            "4": 36,
            "5": 4,
            "6": 11,
            "7": 6,
          },
        },
        "2018": {
          total: 292,
          statusBreakdown: {
            lulus: 281,
            undurDiri: 5,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 109,
            female: 183,
          },
          graduationYears: {
            "3": 208,
            "4": 46,
            "5": 17,
            "6": 4,
            "7": 6,
          },
        },
        "2019": {
          total: 302,
          statusBreakdown: {
            lulus: 282,
            undurDiri: 9,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 11,
          },
          genderBreakdown: {
            male: 152,
            female: 150,
          },
          graduationYears: {
            "3": 225,
            "4": 51,
            "5": 6,
          },
        },
        "2020": {
          total: 310,
          statusBreakdown: {
            lulus: 287,
            undurDiri: 7,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 15,
          },
          genderBreakdown: {
            male: 135,
            female: 175,
          },
          graduationYears: {
            "3": 240,
            "4": 43,
            "5": 4,
          },
        },
        "2021": {
          total: 288,
          statusBreakdown: {
            lulus: 249,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 37,
          },
          genderBreakdown: {
            male: 124,
            female: 164,
          },
          graduationYears: {
            "3": 202,
            "4": 46,
          },
        },
        "2022": {
          total: 331,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 328,
          },
          genderBreakdown: {
            male: 152,
            female: 179,
          },
          graduationYears: {},
        },
        "2023": {
          total: 307,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 13,
            cuti: 0,
            other: 294,
          },
          genderBreakdown: {
            male: 132,
            female: 175,
          },
          graduationYears: {},
        },
        "2024": {
          total: 317,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 7,
            cuti: 0,
            other: 310,
          },
          genderBreakdown: {
            male: 148,
            female: 169,
          },
          graduationYears: {},
        },
      },
    },
    "191": {
      prodiCode: "191",
      prodiName: "Unknown Prodi",
      total: 2,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 2,
      },
      genderBreakdown: {
        male: 0,
        female: 2,
      },
      byBatch: {
        "1990": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2001": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
      },
    },
    "192": {
      prodiCode: "192",
      prodiName: "Kewirausahaan",
      total: 773,
      statusBreakdown: {
        lulus: 473,
        undurDiri: 16,
        dikeluarkan: 3,
        aktif: 10,
        cuti: 0,
        other: 271,
      },
      genderBreakdown: {
        male: 356,
        female: 417,
      },
      byBatch: {
        "2001": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2013": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 0,
          },
          graduationYears: {
            "4": 2,
            "5": 1,
          },
        },
        "2014": {
          total: 40,
          statusBreakdown: {
            lulus: 39,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 22,
            female: 18,
          },
          graduationYears: {
            "3": 29,
            "4": 5,
            "5": 3,
            "7": 2,
          },
        },
        "2015": {
          total: 70,
          statusBreakdown: {
            lulus: 68,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 32,
            female: 38,
          },
          graduationYears: {
            "3": 55,
            "4": 11,
            "6": 2,
          },
        },
        "2016": {
          total: 19,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 4,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 15,
            female: 4,
          },
          graduationYears: {
            "4": 8,
            "5": 5,
            "7": 1,
          },
        },
        "2017": {
          total: 80,
          statusBreakdown: {
            lulus: 74,
            undurDiri: 4,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 32,
            female: 48,
          },
          graduationYears: {
            "3": 64,
            "4": 5,
            "5": 1,
            "6": 1,
            "7": 3,
          },
        },
        "2018": {
          total: 80,
          statusBreakdown: {
            lulus: 76,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 35,
            female: 45,
          },
          graduationYears: {
            "3": 64,
            "4": 8,
            "5": 2,
            "6": 1,
            "7": 1,
          },
        },
        "2019": {
          total: 79,
          statusBreakdown: {
            lulus: 75,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 33,
            female: 46,
          },
          graduationYears: {
            "3": 68,
            "4": 4,
            "5": 3,
          },
        },
        "2020": {
          total: 79,
          statusBreakdown: {
            lulus: 73,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 35,
            female: 44,
          },
          graduationYears: {
            "3": 69,
            "4": 3,
          },
        },
        "2021": {
          total: 56,
          statusBreakdown: {
            lulus: 51,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 24,
            female: 32,
          },
          graduationYears: {
            "3": 50,
            "4": 1,
          },
        },
        "2022": {
          total: 83,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 3,
            cuti: 0,
            other: 79,
          },
          genderBreakdown: {
            male: 41,
            female: 42,
          },
          graduationYears: {},
        },
        "2023": {
          total: 91,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 5,
            cuti: 0,
            other: 86,
          },
          genderBreakdown: {
            male: 33,
            female: 58,
          },
          graduationYears: {},
        },
        "2024": {
          total: 92,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 0,
            other: 90,
          },
          genderBreakdown: {
            male: 51,
            female: 41,
          },
          graduationYears: {},
        },
      },
    },
    "193": {
      prodiCode: "193",
      prodiName: "Unknown Prodi",
      total: 1,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 1,
      },
      genderBreakdown: {
        male: 0,
        female: 1,
      },
      byBatch: {
        "2020": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
      },
    },
    "196": {
      prodiCode: "196",
      prodiName: "STEI - Komputasi",
      total: 323,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 10,
        dikeluarkan: 8,
        aktif: 286,
        cuti: 0,
        other: 19,
      },
      genderBreakdown: {
        male: 20,
        female: 303,
      },
      byBatch: {
        "2022": {
          total: 13,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 4,
            dikeluarkan: 8,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 10,
            female: 3,
          },
          graduationYears: {},
        },
        "2023": {
          total: 8,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 5,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 4,
            female: 4,
          },
          graduationYears: {},
        },
        "2024": {
          total: 16,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 15,
          },
          genderBreakdown: {
            male: 6,
            female: 10,
          },
          graduationYears: {},
        },
        "2025": {
          total: 286,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 286,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 286,
          },
          graduationYears: {},
        },
      },
    },
    "197": {
      prodiCode: "197",
      prodiName: "SBM",
      total: 1252,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 68,
        dikeluarkan: 0,
        aktif: 388,
        cuti: 0,
        other: 796,
      },
      genderBreakdown: {
        male: 33,
        female: 1219,
      },
      byBatch: {
        "2016": {
          total: 348,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 348,
          },
          genderBreakdown: {
            male: 0,
            female: 348,
          },
          graduationYears: {},
        },
        "2017": {
          total: 10,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 10,
          },
          genderBreakdown: {
            male: 0,
            female: 10,
          },
          graduationYears: {},
        },
        "2018": {
          total: 5,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 0,
            female: 5,
          },
          graduationYears: {},
        },
        "2019": {
          total: 6,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 0,
            female: 6,
          },
          graduationYears: {},
        },
        "2020": {
          total: 72,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 13,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 59,
          },
          genderBreakdown: {
            male: 5,
            female: 67,
          },
          graduationYears: {},
        },
        "2021": {
          total: 27,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 13,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 14,
          },
          genderBreakdown: {
            male: 6,
            female: 21,
          },
          graduationYears: {},
        },
        "2022": {
          total: 25,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 20,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 9,
            female: 16,
          },
          graduationYears: {},
        },
        "2023": {
          total: 7,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 7,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 2,
          },
          graduationYears: {},
        },
        "2024": {
          total: 364,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 15,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 349,
          },
          genderBreakdown: {
            male: 8,
            female: 356,
          },
          graduationYears: {},
        },
        "2025": {
          total: 388,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 388,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 388,
          },
          graduationYears: {},
        },
      },
    },
    "198": {
      prodiCode: "198",
      prodiName: "SITH - Rekayasa",
      total: 548,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 43,
        dikeluarkan: 2,
        aktif: 212,
        cuti: 0,
        other: 291,
      },
      genderBreakdown: {
        male: 18,
        female: 530,
      },
      byBatch: {
        "2016": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2017": {
          total: 8,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 8,
          },
          genderBreakdown: {
            male: 0,
            female: 8,
          },
          graduationYears: {},
        },
        "2018": {
          total: 4,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 0,
            female: 4,
          },
          graduationYears: {},
        },
        "2019": {
          total: 9,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 9,
          },
          genderBreakdown: {
            male: 0,
            female: 9,
          },
          graduationYears: {},
        },
        "2020": {
          total: 6,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 6,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 6,
          },
          graduationYears: {},
        },
        "2021": {
          total: 35,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 22,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 13,
          },
          genderBreakdown: {
            male: 10,
            female: 25,
          },
          graduationYears: {},
        },
        "2022": {
          total: 25,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 11,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 12,
          },
          genderBreakdown: {
            male: 3,
            female: 22,
          },
          graduationYears: {},
        },
        "2023": {
          total: 8,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 4,
            female: 4,
          },
          graduationYears: {},
        },
        "2024": {
          total: 240,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 239,
          },
          genderBreakdown: {
            male: 1,
            female: 239,
          },
          graduationYears: {},
        },
        "2025": {
          total: 212,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 212,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 212,
          },
          graduationYears: {},
        },
      },
    },
    "199": {
      prodiCode: "199",
      prodiName: "SAPPK",
      total: 537,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 23,
        dikeluarkan: 0,
        aktif: 245,
        cuti: 0,
        other: 269,
      },
      genderBreakdown: {
        male: 13,
        female: 524,
      },
      byBatch: {
        "2016": {
          total: 2,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 0,
            female: 2,
          },
          graduationYears: {},
        },
        "2017": {
          total: 4,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 0,
            female: 4,
          },
          graduationYears: {},
        },
        "2018": {
          total: 5,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 0,
            female: 5,
          },
          graduationYears: {},
        },
        "2019": {
          total: 4,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 0,
            female: 4,
          },
          graduationYears: {},
        },
        "2020": {
          total: 12,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 10,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 4,
            female: 8,
          },
          graduationYears: {},
        },
        "2021": {
          total: 13,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 6,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 7,
          },
          genderBreakdown: {
            male: 3,
            female: 10,
          },
          graduationYears: {},
        },
        "2022": {
          total: 8,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 5,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 3,
            female: 5,
          },
          graduationYears: {},
        },
        "2023": {
          total: 3,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 1,
            female: 2,
          },
          graduationYears: {},
        },
        "2024": {
          total: 241,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 240,
          },
          genderBreakdown: {
            male: 2,
            female: 239,
          },
          graduationYears: {},
        },
        "2025": {
          total: 245,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 245,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 245,
          },
          graduationYears: {},
        },
      },
    },
    "200": {
      prodiCode: "200",
      prodiName: "Unknown Prodi",
      total: 301,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 301,
      },
      genderBreakdown: {
        male: 84,
        female: 217,
      },
      byBatch: {
        "2001": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2021": {
          total: 159,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 159,
          },
          genderBreakdown: {
            male: 0,
            female: 159,
          },
          graduationYears: {},
        },
        "2022": {
          total: 94,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 94,
          },
          genderBreakdown: {
            male: 60,
            female: 34,
          },
          graduationYears: {},
        },
        "2023": {
          total: 41,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 41,
          },
          genderBreakdown: {
            male: 19,
            female: 22,
          },
          graduationYears: {},
        },
        "2024": {
          total: 6,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 5,
            female: 1,
          },
          graduationYears: {},
        },
      },
    },
    "201": {
      prodiCode: "201",
      prodiName: "Matematika",
      total: 360,
      statusBreakdown: {
        lulus: 299,
        undurDiri: 14,
        dikeluarkan: 6,
        aktif: 39,
        cuti: 0,
        other: 2,
      },
      genderBreakdown: {
        male: 186,
        female: 174,
      },
      byBatch: {
        "1999": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2006": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {},
        },
        "2009": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2014": {
          total: 5,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 2,
          },
          graduationYears: {
            "3": 4,
            "4": 1,
          },
        },
        "2015": {
          total: 38,
          statusBreakdown: {
            lulus: 35,
            undurDiri: 1,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 14,
            female: 24,
          },
          graduationYears: {
            "3": 3,
          },
        },
        "2016": {
          total: 42,
          statusBreakdown: {
            lulus: 40,
            undurDiri: 0,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 19,
            female: 23,
          },
          graduationYears: {
            "3": 10,
          },
        },
        "2017": {
          total: 14,
          statusBreakdown: {
            lulus: 11,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 10,
            female: 4,
          },
          graduationYears: {
            "3": 10,
          },
        },
        "2018": {
          total: 28,
          statusBreakdown: {
            lulus: 26,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 14,
            female: 14,
          },
          graduationYears: {
            "3": 11,
            "4": 2,
          },
        },
        "2019": {
          total: 33,
          statusBreakdown: {
            lulus: 33,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 14,
            female: 19,
          },
          graduationYears: {
            "3": 6,
            "4": 2,
          },
        },
        "2020": {
          total: 55,
          statusBreakdown: {
            lulus: 52,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 27,
            female: 28,
          },
          graduationYears: {
            "3": 22,
            "4": 3,
          },
        },
        "2021": {
          total: 50,
          statusBreakdown: {
            lulus: 45,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 29,
            female: 21,
          },
          graduationYears: {
            "3": 3,
          },
        },
        "2022": {
          total: 32,
          statusBreakdown: {
            lulus: 30,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 19,
            female: 13,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2023": {
          total: 33,
          statusBreakdown: {
            lulus: 15,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 16,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 21,
            female: 12,
          },
          graduationYears: {},
        },
        "2024": {
          total: 26,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 22,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 13,
            female: 13,
          },
          graduationYears: {},
        },
      },
    },
    "202": {
      prodiCode: "202",
      prodiName: "Fisika",
      total: 422,
      statusBreakdown: {
        lulus: 328,
        undurDiri: 10,
        dikeluarkan: 9,
        aktif: 45,
        cuti: 0,
        other: 30,
      },
      genderBreakdown: {
        male: 222,
        female: 200,
      },
      byBatch: {
        "2007": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 0,
          },
          graduationYears: {},
        },
        "2008": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2010": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2015": {
          total: 42,
          statusBreakdown: {
            lulus: 41,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 22,
            female: 20,
          },
          graduationYears: {
            "3": 4,
            "4": 1,
          },
        },
        "2016": {
          total: 70,
          statusBreakdown: {
            lulus: 67,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 38,
            female: 32,
          },
          graduationYears: {
            "3": 21,
          },
        },
        "2017": {
          total: 29,
          statusBreakdown: {
            lulus: 25,
            undurDiri: 1,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 19,
            female: 10,
          },
          graduationYears: {
            "3": 8,
            "4": 3,
          },
        },
        "2018": {
          total: 48,
          statusBreakdown: {
            lulus: 45,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 27,
            female: 21,
          },
          graduationYears: {
            "3": 17,
            "4": 2,
          },
        },
        "2019": {
          total: 35,
          statusBreakdown: {
            lulus: 33,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 26,
            female: 9,
          },
          graduationYears: {
            "3": 17,
          },
        },
        "2020": {
          total: 46,
          statusBreakdown: {
            lulus: 43,
            undurDiri: 1,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 21,
            female: 25,
          },
          graduationYears: {
            "3": 21,
            "4": 2,
          },
        },
        "2021": {
          total: 35,
          statusBreakdown: {
            lulus: 29,
            undurDiri: 1,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 21,
            female: 14,
          },
          graduationYears: {
            "3": 3,
          },
        },
        "2022": {
          total: 50,
          statusBreakdown: {
            lulus: 27,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 23,
          },
          genderBreakdown: {
            male: 23,
            female: 27,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2023": {
          total: 29,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 16,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 13,
            female: 16,
          },
          graduationYears: {},
        },
        "2024": {
          total: 34,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 29,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 9,
            female: 25,
          },
          graduationYears: {},
        },
      },
    },
    "203": {
      prodiCode: "203",
      prodiName: "Astronomi",
      total: 107,
      statusBreakdown: {
        lulus: 79,
        undurDiri: 3,
        dikeluarkan: 2,
        aktif: 17,
        cuti: 0,
        other: 6,
      },
      genderBreakdown: {
        male: 52,
        female: 55,
      },
      byBatch: {
        "2015": {
          total: 10,
          statusBreakdown: {
            lulus: 10,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 6,
          },
          graduationYears: {
            "3": 3,
            "4": 1,
          },
        },
        "2016": {
          total: 13,
          statusBreakdown: {
            lulus: 10,
            undurDiri: 1,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 9,
            female: 4,
          },
          graduationYears: {
            "3": 3,
            "5": 1,
          },
        },
        "2017": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {
            "3": 2,
          },
        },
        "2018": {
          total: 6,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 4,
          },
          graduationYears: {
            "3": 2,
            "4": 1,
          },
        },
        "2019": {
          total: 16,
          statusBreakdown: {
            lulus: 16,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 8,
          },
          graduationYears: {
            "3": 8,
            "4": 1,
          },
        },
        "2020": {
          total: 19,
          statusBreakdown: {
            lulus: 16,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 7,
            female: 12,
          },
          graduationYears: {
            "3": 4,
          },
        },
        "2021": {
          total: 10,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 5,
            female: 5,
          },
          graduationYears: {
            "3": 1,
            "4": 1,
          },
        },
        "2022": {
          total: 10,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 4,
            female: 6,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2023": {
          total: 7,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 3,
          },
          graduationYears: {},
        },
        "2024": {
          total: 14,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 14,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 6,
          },
          graduationYears: {},
        },
      },
    },
    "204": {
      prodiCode: "204",
      prodiName: "Unknown Prodi",
      total: 2,
      statusBreakdown: {
        lulus: 1,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 1,
      },
      genderBreakdown: {
        male: 1,
        female: 1,
      },
      byBatch: {
        "1999": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2023": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
      },
    },
    "205": {
      prodiCode: "205",
      prodiName: "Kimia",
      total: 446,
      statusBreakdown: {
        lulus: 364,
        undurDiri: 11,
        dikeluarkan: 2,
        aktif: 63,
        cuti: 0,
        other: 6,
      },
      genderBreakdown: {
        male: 136,
        female: 310,
      },
      byBatch: {
        "2006": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 3,
          },
          graduationYears: {},
        },
        "2007": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 2,
          },
          graduationYears: {},
        },
        "2008": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 2,
          },
          graduationYears: {},
        },
        "2010": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2011": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2012": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2013": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2014": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {
            "3": 1,
            "4": 1,
          },
        },
        "2015": {
          total: 45,
          statusBreakdown: {
            lulus: 45,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 15,
            female: 30,
          },
          graduationYears: {
            "3": 11,
            "4": 2,
          },
        },
        "2016": {
          total: 55,
          statusBreakdown: {
            lulus: 54,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 17,
            female: 38,
          },
          graduationYears: {
            "3": 4,
          },
        },
        "2017": {
          total: 8,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 5,
          },
          graduationYears: {
            "3": 4,
            "4": 1,
          },
        },
        "2018": {
          total: 36,
          statusBreakdown: {
            lulus: 34,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 11,
            female: 25,
          },
          graduationYears: {
            "3": 20,
            "4": 4,
          },
        },
        "2019": {
          total: 57,
          statusBreakdown: {
            lulus: 55,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 17,
            female: 40,
          },
          graduationYears: {
            "3": 26,
            "4": 1,
          },
        },
        "2020": {
          total: 72,
          statusBreakdown: {
            lulus: 69,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 23,
            female: 49,
          },
          graduationYears: {
            "3": 27,
            "4": 1,
          },
        },
        "2021": {
          total: 39,
          statusBreakdown: {
            lulus: 34,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 9,
            female: 30,
          },
          graduationYears: {
            "3": 10,
            "4": 2,
          },
        },
        "2022": {
          total: 37,
          statusBreakdown: {
            lulus: 35,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 14,
            female: 23,
          },
          graduationYears: {
            "3": 2,
          },
        },
        "2023": {
          total: 37,
          statusBreakdown: {
            lulus: 18,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 18,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 11,
            female: 26,
          },
          graduationYears: {},
        },
        "2024": {
          total: 47,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 43,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 14,
            female: 33,
          },
          graduationYears: {},
        },
      },
    },
    "206": {
      prodiCode: "206",
      prodiName: "Biologi",
      total: 190,
      statusBreakdown: {
        lulus: 149,
        undurDiri: 9,
        dikeluarkan: 3,
        aktif: 26,
        cuti: 0,
        other: 3,
      },
      genderBreakdown: {
        male: 55,
        female: 135,
      },
      byBatch: {
        "2002": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2014": {
          total: 13,
          statusBreakdown: {
            lulus: 11,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 12,
          },
          graduationYears: {
            "3": 9,
            "5": 1,
          },
        },
        "2015": {
          total: 11,
          statusBreakdown: {
            lulus: 10,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 8,
          },
          graduationYears: {
            "3": 6,
          },
        },
        "2016": {
          total: 20,
          statusBreakdown: {
            lulus: 18,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 14,
          },
          graduationYears: {
            "3": 10,
            "4": 3,
          },
        },
        "2017": {
          total: 21,
          statusBreakdown: {
            lulus: 19,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 14,
          },
          graduationYears: {
            "3": 15,
            "4": 3,
            "5": 1,
          },
        },
        "2018": {
          total: 14,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 10,
          },
          graduationYears: {
            "3": 9,
            "4": 3,
          },
        },
        "2019": {
          total: 30,
          statusBreakdown: {
            lulus: 27,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 23,
          },
          graduationYears: {
            "3": 14,
            "4": 5,
          },
        },
        "2020": {
          total: 23,
          statusBreakdown: {
            lulus: 21,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 16,
          },
          graduationYears: {
            "3": 10,
            "4": 4,
          },
        },
        "2021": {
          total: 17,
          statusBreakdown: {
            lulus: 16,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 6,
            female: 11,
          },
          graduationYears: {
            "3": 5,
            "4": 5,
          },
        },
        "2022": {
          total: 13,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 4,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 3,
            female: 10,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2023": {
          total: 16,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 12,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 11,
          },
          graduationYears: {},
        },
        "2024": {
          total: 11,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 10,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 5,
            female: 6,
          },
          graduationYears: {},
        },
      },
    },
    "207": {
      prodiCode: "207",
      prodiName: "Farmasi",
      total: 452,
      statusBreakdown: {
        lulus: 381,
        undurDiri: 18,
        dikeluarkan: 1,
        aktif: 51,
        cuti: 0,
        other: 1,
      },
      genderBreakdown: {
        male: 122,
        female: 330,
      },
      byBatch: {
        "2001": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2004": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 0,
          },
          graduationYears: {},
        },
        "2010": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2012": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2014": {
          total: 8,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 3,
          },
          graduationYears: {
            "3": 6,
            "4": 2,
          },
        },
        "2015": {
          total: 41,
          statusBreakdown: {
            lulus: 40,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 11,
            female: 30,
          },
          graduationYears: {
            "3": 19,
            "4": 2,
          },
        },
        "2016": {
          total: 62,
          statusBreakdown: {
            lulus: 60,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 15,
            female: 47,
          },
          graduationYears: {
            "3": 14,
          },
        },
        "2017": {
          total: 12,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 10,
          },
          graduationYears: {
            "3": 7,
            "4": 4,
          },
        },
        "2018": {
          total: 48,
          statusBreakdown: {
            lulus: 48,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 41,
          },
          graduationYears: {
            "3": 29,
            "4": 4,
          },
        },
        "2019": {
          total: 54,
          statusBreakdown: {
            lulus: 52,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 13,
            female: 41,
          },
          graduationYears: {
            "3": 18,
          },
        },
        "2020": {
          total: 68,
          statusBreakdown: {
            lulus: 62,
            undurDiri: 6,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 22,
            female: 46,
          },
          graduationYears: {
            "3": 33,
          },
        },
        "2021": {
          total: 54,
          statusBreakdown: {
            lulus: 47,
            undurDiri: 7,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 15,
            female: 39,
          },
          graduationYears: {
            "3": 12,
            "4": 1,
          },
        },
        "2022": {
          total: 25,
          statusBreakdown: {
            lulus: 21,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 10,
            female: 15,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2023": {
          total: 45,
          statusBreakdown: {
            lulus: 21,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 23,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 16,
            female: 29,
          },
          graduationYears: {},
        },
        "2024": {
          total: 30,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 25,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 27,
          },
          graduationYears: {},
        },
      },
    },
    "208": {
      prodiCode: "208",
      prodiName: "Aktuaria",
      total: 186,
      statusBreakdown: {
        lulus: 145,
        undurDiri: 8,
        dikeluarkan: 6,
        aktif: 22,
        cuti: 0,
        other: 5,
      },
      genderBreakdown: {
        male: 79,
        female: 107,
      },
      byBatch: {
        "2010": {
          total: 2,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 0,
            female: 2,
          },
          graduationYears: {},
        },
        "2014": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 2,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2015": {
          total: 9,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 3,
          },
          graduationYears: {
            "3": 2,
          },
        },
        "2016": {
          total: 21,
          statusBreakdown: {
            lulus: 19,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 14,
          },
          graduationYears: {
            "3": 5,
            "5": 1,
          },
        },
        "2017": {
          total: 5,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 1,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 1,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2018": {
          total: 16,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 14,
          },
          graduationYears: {
            "3": 3,
          },
        },
        "2019": {
          total: 26,
          statusBreakdown: {
            lulus: 24,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 12,
            female: 14,
          },
          graduationYears: {
            "3": 2,
            "4": 2,
          },
        },
        "2020": {
          total: 10,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 5,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2021": {
          total: 33,
          statusBreakdown: {
            lulus: 30,
            undurDiri: 1,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 13,
            female: 20,
          },
          graduationYears: {
            "3": 4,
            "4": 1,
          },
        },
        "2022": {
          total: 20,
          statusBreakdown: {
            lulus: 19,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 13,
          },
          graduationYears: {
            "3": 2,
          },
        },
        "2023": {
          total: 20,
          statusBreakdown: {
            lulus: 16,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 12,
            female: 8,
          },
          graduationYears: {},
        },
        "2024": {
          total: 22,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 20,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 11,
            female: 11,
          },
          graduationYears: {},
        },
      },
    },
    "209": {
      prodiCode: "209",
      prodiName: "Sains Komputasi",
      total: 156,
      statusBreakdown: {
        lulus: 118,
        undurDiri: 4,
        dikeluarkan: 1,
        aktif: 30,
        cuti: 0,
        other: 3,
      },
      genderBreakdown: {
        male: 103,
        female: 53,
      },
      byBatch: {
        "2014": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2015": {
          total: 6,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 0,
          },
          graduationYears: {
            "3": 3,
          },
        },
        "2016": {
          total: 13,
          statusBreakdown: {
            lulus: 10,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 9,
            female: 4,
          },
          graduationYears: {
            "3": 7,
            "4": 1,
          },
        },
        "2017": {
          total: 11,
          statusBreakdown: {
            lulus: 11,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 4,
          },
          graduationYears: {
            "3": 5,
            "4": 2,
          },
        },
        "2018": {
          total: 7,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 4,
          },
          graduationYears: {
            "3": 2,
          },
        },
        "2019": {
          total: 5,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 2,
          },
          graduationYears: {
            "3": 2,
          },
        },
        "2020": {
          total: 18,
          statusBreakdown: {
            lulus: 17,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 11,
          },
          graduationYears: {
            "3": 13,
          },
        },
        "2021": {
          total: 13,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 10,
            female: 3,
          },
          graduationYears: {
            "3": 4,
          },
        },
        "2022": {
          total: 41,
          statusBreakdown: {
            lulus: 38,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 30,
            female: 11,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2023": {
          total: 25,
          statusBreakdown: {
            lulus: 11,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 14,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 18,
            female: 7,
          },
          graduationYears: {},
        },
        "2024": {
          total: 16,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 14,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 9,
            female: 7,
          },
          graduationYears: {},
        },
      },
    },
    "211": {
      prodiCode: "211",
      prodiName: "Bioteknologi",
      total: 370,
      statusBreakdown: {
        lulus: 247,
        undurDiri: 9,
        dikeluarkan: 4,
        aktif: 100,
        cuti: 0,
        other: 10,
      },
      genderBreakdown: {
        male: 101,
        female: 269,
      },
      byBatch: {
        "2012": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2013": {
          total: 2,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 2,
          },
          graduationYears: {},
        },
        "2014": {
          total: 12,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 8,
          },
          graduationYears: {
            "3": 8,
            "4": 4,
          },
        },
        "2015": {
          total: 23,
          statusBreakdown: {
            lulus: 22,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 17,
          },
          graduationYears: {
            "3": 18,
          },
        },
        "2016": {
          total: 35,
          statusBreakdown: {
            lulus: 35,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 28,
          },
          graduationYears: {
            "3": 17,
            "4": 1,
          },
        },
        "2017": {
          total: 15,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 13,
          },
          graduationYears: {
            "3": 10,
          },
        },
        "2018": {
          total: 23,
          statusBreakdown: {
            lulus: 23,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 17,
          },
          graduationYears: {
            "3": 10,
            "4": 4,
          },
        },
        "2019": {
          total: 24,
          statusBreakdown: {
            lulus: 21,
            undurDiri: 0,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 17,
          },
          graduationYears: {
            "3": 6,
            "4": 3,
          },
        },
        "2020": {
          total: 42,
          statusBreakdown: {
            lulus: 38,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 14,
            female: 28,
          },
          graduationYears: {
            "3": 17,
            "4": 6,
          },
        },
        "2021": {
          total: 43,
          statusBreakdown: {
            lulus: 38,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 11,
            female: 32,
          },
          graduationYears: {
            "3": 7,
            "4": 1,
          },
        },
        "2022": {
          total: 44,
          statusBreakdown: {
            lulus: 35,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 6,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 14,
            female: 30,
          },
          graduationYears: {
            "3": 4,
          },
        },
        "2023": {
          total: 47,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 37,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 13,
            female: 34,
          },
          graduationYears: {},
        },
        "2024": {
          total: 59,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 57,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 17,
            female: 42,
          },
          graduationYears: {},
        },
      },
    },
    "213": {
      prodiCode: "213",
      prodiName: "Biomanajemen",
      total: 245,
      statusBreakdown: {
        lulus: 177,
        undurDiri: 11,
        dikeluarkan: 1,
        aktif: 44,
        cuti: 0,
        other: 12,
      },
      genderBreakdown: {
        male: 66,
        female: 179,
      },
      byBatch: {
        "2014": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2015": {
          total: 7,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 5,
          },
          graduationYears: {
            "3": 4,
            "4": 1,
          },
        },
        "2016": {
          total: 10,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 9,
          },
          graduationYears: {
            "3": 3,
          },
        },
        "2017": {
          total: 8,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 5,
          },
          graduationYears: {
            "3": 3,
            "4": 1,
            "5": 3,
          },
        },
        "2018": {
          total: 19,
          statusBreakdown: {
            lulus: 17,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 13,
          },
          graduationYears: {
            "3": 7,
            "4": 3,
          },
        },
        "2019": {
          total: 32,
          statusBreakdown: {
            lulus: 29,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 10,
            female: 22,
          },
          graduationYears: {
            "3": 4,
            "4": 8,
          },
        },
        "2020": {
          total: 41,
          statusBreakdown: {
            lulus: 33,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 11,
            female: 30,
          },
          graduationYears: {
            "3": 7,
            "4": 2,
          },
        },
        "2021": {
          total: 37,
          statusBreakdown: {
            lulus: 34,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 9,
            female: 28,
          },
          graduationYears: {
            "3": 10,
            "4": 3,
          },
        },
        "2022": {
          total: 34,
          statusBreakdown: {
            lulus: 23,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 9,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 9,
            female: 25,
          },
          graduationYears: {
            "3": 3,
          },
        },
        "2023": {
          total: 28,
          statusBreakdown: {
            lulus: 17,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 8,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 8,
            female: 20,
          },
          graduationYears: {},
        },
        "2024": {
          total: 28,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 27,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 6,
            female: 22,
          },
          graduationYears: {},
        },
      },
    },
    "217": {
      prodiCode: "217",
      prodiName: "Keolahragaan",
      total: 83,
      statusBreakdown: {
        lulus: 62,
        undurDiri: 3,
        dikeluarkan: 0,
        aktif: 16,
        cuti: 0,
        other: 2,
      },
      genderBreakdown: {
        male: 58,
        female: 25,
      },
      byBatch: {
        "2014": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 0,
          },
          graduationYears: {
            "3": 2,
          },
        },
        "2015": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 0,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2016": {
          total: 4,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 1,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2017": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {
            "3": 1,
            "4": 1,
          },
        },
        "2018": {
          total: 5,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 1,
          },
          graduationYears: {},
        },
        "2019": {
          total: 8,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 2,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2020": {
          total: 7,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 1,
          },
          graduationYears: {},
        },
        "2021": {
          total: 26,
          statusBreakdown: {
            lulus: 26,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 15,
            female: 11,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2022": {
          total: 7,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 6,
            female: 1,
          },
          graduationYears: {},
        },
        "2023": {
          total: 11,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 9,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 5,
          },
          graduationYears: {},
        },
        "2024": {
          total: 8,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 7,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 6,
            female: 2,
          },
          graduationYears: {},
        },
      },
    },
    "218": {
      prodiCode: "218",
      prodiName: "Farmasi Industri",
      total: 91,
      statusBreakdown: {
        lulus: 73,
        undurDiri: 2,
        dikeluarkan: 0,
        aktif: 16,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 49,
        female: 42,
      },
      byBatch: {
        "2015": {
          total: 4,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 2,
          },
          graduationYears: {},
        },
        "2016": {
          total: 13,
          statusBreakdown: {
            lulus: 13,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 5,
          },
          graduationYears: {
            "3": 2,
          },
        },
        "2017": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2018": {
          total: 6,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 2,
          },
          graduationYears: {
            "4": 2,
          },
        },
        "2019": {
          total: 8,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 3,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2020": {
          total: 11,
          statusBreakdown: {
            lulus: 11,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 4,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2021": {
          total: 20,
          statusBreakdown: {
            lulus: 19,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 11,
            female: 9,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2022": {
          total: 6,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 2,
          },
          graduationYears: {},
        },
        "2023": {
          total: 11,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 5,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 8,
          },
          graduationYears: {},
        },
        "2024": {
          total: 11,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 11,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 6,
          },
          graduationYears: {},
        },
      },
    },
    "220": {
      prodiCode: "220",
      prodiName: "Teknik Geologi",
      total: 455,
      statusBreakdown: {
        lulus: 351,
        undurDiri: 16,
        dikeluarkan: 9,
        aktif: 61,
        cuti: 0,
        other: 18,
      },
      genderBreakdown: {
        male: 336,
        female: 119,
      },
      byBatch: {
        "2010": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2014": {
          total: 21,
          statusBreakdown: {
            lulus: 20,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 17,
            female: 4,
          },
          graduationYears: {
            "3": 11,
            "4": 9,
          },
        },
        "2015": {
          total: 40,
          statusBreakdown: {
            lulus: 38,
            undurDiri: 0,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 31,
            female: 9,
          },
          graduationYears: {
            "3": 12,
            "4": 11,
            "5": 1,
          },
        },
        "2016": {
          total: 48,
          statusBreakdown: {
            lulus: 43,
            undurDiri: 3,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 38,
            female: 10,
          },
          graduationYears: {
            "3": 23,
            "4": 5,
            "5": 10,
          },
        },
        "2017": {
          total: 22,
          statusBreakdown: {
            lulus: 21,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 14,
            female: 8,
          },
          graduationYears: {
            "3": 8,
            "4": 10,
            "5": 3,
          },
        },
        "2018": {
          total: 52,
          statusBreakdown: {
            lulus: 50,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 40,
            female: 12,
          },
          graduationYears: {
            "3": 38,
            "4": 12,
          },
        },
        "2019": {
          total: 37,
          statusBreakdown: {
            lulus: 35,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 27,
            female: 10,
          },
          graduationYears: {
            "3": 11,
            "4": 13,
          },
        },
        "2020": {
          total: 44,
          statusBreakdown: {
            lulus: 35,
            undurDiri: 3,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 35,
            female: 9,
          },
          graduationYears: {
            "3": 17,
            "4": 10,
          },
        },
        "2021": {
          total: 80,
          statusBreakdown: {
            lulus: 61,
            undurDiri: 6,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 10,
          },
          genderBreakdown: {
            male: 50,
            female: 30,
          },
          graduationYears: {
            "3": 24,
            "4": 9,
          },
        },
        "2022": {
          total: 57,
          statusBreakdown: {
            lulus: 46,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 8,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 47,
            female: 10,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2023": {
          total: 37,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 34,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 32,
            female: 5,
          },
          graduationYears: {},
        },
        "2024": {
          total: 16,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 16,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 11,
          },
          graduationYears: {},
        },
      },
    },
    "221": {
      prodiCode: "221",
      prodiName: "Rekayasa Pertambangan",
      total: 368,
      statusBreakdown: {
        lulus: 254,
        undurDiri: 24,
        dikeluarkan: 7,
        aktif: 61,
        cuti: 0,
        other: 22,
      },
      genderBreakdown: {
        male: 250,
        female: 118,
      },
      byBatch: {
        "2004": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2014": {
          total: 16,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 0,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 12,
            female: 4,
          },
          graduationYears: {
            "3": 9,
            "4": 5,
          },
        },
        "2015": {
          total: 29,
          statusBreakdown: {
            lulus: 29,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 20,
            female: 9,
          },
          graduationYears: {
            "3": 20,
            "4": 5,
          },
        },
        "2016": {
          total: 39,
          statusBreakdown: {
            lulus: 37,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 28,
            female: 11,
          },
          graduationYears: {
            "3": 19,
            "4": 4,
            "5": 1,
          },
        },
        "2017": {
          total: 27,
          statusBreakdown: {
            lulus: 26,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 18,
            female: 9,
          },
          graduationYears: {
            "3": 13,
            "4": 12,
            "5": 1,
          },
        },
        "2018": {
          total: 31,
          statusBreakdown: {
            lulus: 27,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 25,
            female: 6,
          },
          graduationYears: {
            "3": 10,
            "4": 8,
          },
        },
        "2019": {
          total: 33,
          statusBreakdown: {
            lulus: 28,
            undurDiri: 2,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 25,
            female: 8,
          },
          graduationYears: {
            "3": 16,
            "4": 6,
          },
        },
        "2020": {
          total: 52,
          statusBreakdown: {
            lulus: 43,
            undurDiri: 8,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 32,
            female: 20,
          },
          graduationYears: {
            "3": 24,
            "4": 8,
          },
        },
        "2021": {
          total: 45,
          statusBreakdown: {
            lulus: 30,
            undurDiri: 6,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 8,
          },
          genderBreakdown: {
            male: 33,
            female: 12,
          },
          graduationYears: {
            "3": 10,
            "4": 3,
          },
        },
        "2022": {
          total: 23,
          statusBreakdown: {
            lulus: 13,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 15,
            female: 8,
          },
          graduationYears: {
            "3": 2,
          },
        },
        "2023": {
          total: 24,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 17,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 12,
            female: 12,
          },
          graduationYears: {},
        },
        "2024": {
          total: 48,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 40,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 29,
            female: 19,
          },
          graduationYears: {},
        },
      },
    },
    "222": {
      prodiCode: "222",
      prodiName: "Teknik Perminyakan",
      total: 163,
      statusBreakdown: {
        lulus: 100,
        undurDiri: 12,
        dikeluarkan: 5,
        aktif: 32,
        cuti: 0,
        other: 14,
      },
      genderBreakdown: {
        male: 102,
        female: 61,
      },
      byBatch: {
        "2002": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2003": {
          total: 3,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 1,
            female: 2,
          },
          graduationYears: {},
        },
        "2004": {
          total: 4,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 0,
            female: 4,
          },
          graduationYears: {},
        },
        "2005": {
          total: 3,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 0,
            female: 3,
          },
          graduationYears: {},
        },
        "2014": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2015": {
          total: 17,
          statusBreakdown: {
            lulus: 17,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 12,
            female: 5,
          },
          graduationYears: {
            "3": 5,
          },
        },
        "2016": {
          total: 24,
          statusBreakdown: {
            lulus: 21,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 19,
            female: 5,
          },
          graduationYears: {
            "3": 7,
            "5": 1,
          },
        },
        "2017": {
          total: 9,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 3,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 1,
          },
          graduationYears: {
            "3": 3,
            "5": 1,
          },
        },
        "2018": {
          total: 11,
          statusBreakdown: {
            lulus: 10,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 3,
          },
          graduationYears: {
            "3": 8,
            "4": 1,
          },
        },
        "2019": {
          total: 15,
          statusBreakdown: {
            lulus: 13,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 12,
            female: 3,
          },
          graduationYears: {
            "3": 8,
          },
        },
        "2020": {
          total: 10,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 8,
            female: 2,
          },
          graduationYears: {
            "3": 2,
          },
        },
        "2021": {
          total: 19,
          statusBreakdown: {
            lulus: 15,
            undurDiri: 2,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 13,
            female: 6,
          },
          graduationYears: {
            "3": 6,
          },
        },
        "2022": {
          total: 9,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 6,
            female: 3,
          },
          graduationYears: {
            "3": 3,
          },
        },
        "2023": {
          total: 15,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 9,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 8,
            female: 7,
          },
          graduationYears: {},
        },
        "2024": {
          total: 22,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 22,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 15,
          },
          graduationYears: {},
        },
      },
    },
    "223": {
      prodiCode: "223",
      prodiName: "Teknik Geofisika",
      total: 231,
      statusBreakdown: {
        lulus: 175,
        undurDiri: 2,
        dikeluarkan: 2,
        aktif: 43,
        cuti: 0,
        other: 9,
      },
      genderBreakdown: {
        male: 136,
        female: 95,
      },
      byBatch: {
        "2001": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2014": {
          total: 6,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 0,
          },
          graduationYears: {
            "3": 5,
            "4": 1,
          },
        },
        "2015": {
          total: 27,
          statusBreakdown: {
            lulus: 26,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 23,
            female: 4,
          },
          graduationYears: {
            "3": 10,
            "4": 6,
          },
        },
        "2016": {
          total: 18,
          statusBreakdown: {
            lulus: 18,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 11,
            female: 7,
          },
          graduationYears: {
            "3": 2,
          },
        },
        "2017": {
          total: 4,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 0,
          },
          graduationYears: {
            "3": 4,
          },
        },
        "2018": {
          total: 25,
          statusBreakdown: {
            lulus: 25,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 13,
            female: 12,
          },
          graduationYears: {
            "3": 11,
            "4": 1,
          },
        },
        "2019": {
          total: 32,
          statusBreakdown: {
            lulus: 30,
            undurDiri: 0,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 21,
            female: 11,
          },
          graduationYears: {
            "3": 17,
            "4": 3,
          },
        },
        "2020": {
          total: 31,
          statusBreakdown: {
            lulus: 29,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 17,
            female: 14,
          },
          graduationYears: {
            "3": 12,
            "4": 4,
          },
        },
        "2021": {
          total: 24,
          statusBreakdown: {
            lulus: 20,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 11,
            female: 13,
          },
          graduationYears: {
            "3": 4,
          },
        },
        "2022": {
          total: 14,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 4,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 8,
            female: 6,
          },
          graduationYears: {},
        },
        "2023": {
          total: 25,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 15,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 15,
            female: 10,
          },
          graduationYears: {},
        },
        "2024": {
          total: 24,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 23,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 6,
            female: 18,
          },
          graduationYears: {},
        },
      },
    },
    "224": {
      prodiCode: "224",
      prodiName: "Sains Kebumian",
      total: 218,
      statusBreakdown: {
        lulus: 144,
        undurDiri: 5,
        dikeluarkan: 0,
        aktif: 40,
        cuti: 0,
        other: 29,
      },
      genderBreakdown: {
        male: 110,
        female: 108,
      },
      byBatch: {
        "2012": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2014": {
          total: 4,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 3,
          },
          graduationYears: {
            "3": 4,
          },
        },
        "2015": {
          total: 6,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 3,
          },
          graduationYears: {
            "3": 2,
            "4": 1,
          },
        },
        "2016": {
          total: 10,
          statusBreakdown: {
            lulus: 10,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 5,
          },
          graduationYears: {
            "3": 3,
            "4": 4,
          },
        },
        "2017": {
          total: 10,
          statusBreakdown: {
            lulus: 10,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 4,
          },
          graduationYears: {
            "3": 6,
            "4": 4,
          },
        },
        "2018": {
          total: 12,
          statusBreakdown: {
            lulus: 10,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 4,
          },
          graduationYears: {
            "3": 6,
          },
        },
        "2019": {
          total: 18,
          statusBreakdown: {
            lulus: 16,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 9,
            female: 9,
          },
          graduationYears: {
            "3": 5,
            "4": 4,
          },
        },
        "2020": {
          total: 53,
          statusBreakdown: {
            lulus: 49,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 20,
            female: 33,
          },
          graduationYears: {
            "3": 20,
            "4": 2,
          },
        },
        "2021": {
          total: 10,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 3,
            female: 7,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2022": {
          total: 48,
          statusBreakdown: {
            lulus: 28,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 0,
            other: 18,
          },
          genderBreakdown: {
            male: 28,
            female: 20,
          },
          graduationYears: {
            "3": 2,
          },
        },
        "2023": {
          total: 26,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 20,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 15,
            female: 11,
          },
          graduationYears: {},
        },
        "2024": {
          total: 20,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 18,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 11,
            female: 9,
          },
          graduationYears: {},
        },
      },
    },
    "225": {
      prodiCode: "225",
      prodiName: "Teknik Metalurgi",
      total: 116,
      statusBreakdown: {
        lulus: 73,
        undurDiri: 4,
        dikeluarkan: 1,
        aktif: 27,
        cuti: 0,
        other: 11,
      },
      genderBreakdown: {
        male: 79,
        female: 37,
      },
      byBatch: {
        "2017": {
          total: 5,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 1,
          },
          graduationYears: {
            "3": 1,
            "4": 3,
          },
        },
        "2018": {
          total: 12,
          statusBreakdown: {
            lulus: 11,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 7,
          },
          graduationYears: {
            "3": 10,
            "4": 1,
          },
        },
        "2019": {
          total: 14,
          statusBreakdown: {
            lulus: 13,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 11,
            female: 3,
          },
          graduationYears: {
            "3": 6,
            "4": 2,
          },
        },
        "2020": {
          total: 14,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 7,
            female: 7,
          },
          graduationYears: {
            "3": 2,
          },
        },
        "2021": {
          total: 21,
          statusBreakdown: {
            lulus: 16,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 17,
            female: 4,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2022": {
          total: 9,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 9,
            female: 0,
          },
          graduationYears: {},
        },
        "2023": {
          total: 17,
          statusBreakdown: {
            lulus: 10,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 5,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 15,
            female: 2,
          },
          graduationYears: {},
        },
        "2024": {
          total: 24,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 21,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 11,
            female: 13,
          },
          graduationYears: {},
        },
      },
    },
    "226": {
      prodiCode: "226",
      prodiName: "Teknik Panas Bumi",
      total: 224,
      statusBreakdown: {
        lulus: 112,
        undurDiri: 13,
        dikeluarkan: 2,
        aktif: 85,
        cuti: 0,
        other: 12,
      },
      genderBreakdown: {
        male: 176,
        female: 48,
      },
      byBatch: {
        "2013": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2014": {
          total: 6,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 3,
          },
          graduationYears: {
            "3": 6,
          },
        },
        "2015": {
          total: 11,
          statusBreakdown: {
            lulus: 10,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 10,
            female: 1,
          },
          graduationYears: {
            "3": 9,
          },
        },
        "2016": {
          total: 22,
          statusBreakdown: {
            lulus: 20,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 12,
            female: 10,
          },
          graduationYears: {
            "3": 9,
            "4": 1,
          },
        },
        "2017": {
          total: 8,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 1,
          },
          graduationYears: {
            "3": 1,
            "4": 5,
          },
        },
        "2018": {
          total: 13,
          statusBreakdown: {
            lulus: 13,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 10,
            female: 3,
          },
          graduationYears: {
            "3": 6,
            "4": 1,
          },
        },
        "2019": {
          total: 20,
          statusBreakdown: {
            lulus: 19,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 16,
            female: 4,
          },
          graduationYears: {
            "3": 8,
            "4": 1,
          },
        },
        "2020": {
          total: 15,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 10,
            female: 5,
          },
          graduationYears: {
            "3": 8,
            "4": 3,
          },
        },
        "2021": {
          total: 13,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 8,
            female: 5,
          },
          graduationYears: {
            "3": 4,
            "4": 1,
          },
        },
        "2022": {
          total: 34,
          statusBreakdown: {
            lulus: 16,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 13,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 31,
            female: 3,
          },
          graduationYears: {
            "3": 8,
          },
        },
        "2023": {
          total: 67,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 60,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 60,
            female: 7,
          },
          graduationYears: {},
        },
        "2024": {
          total: 14,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 12,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 9,
            female: 5,
          },
          graduationYears: {},
        },
      },
    },
    "227": {
      prodiCode: "227",
      prodiName: "Teknik Air Tanah",
      total: 87,
      statusBreakdown: {
        lulus: 67,
        undurDiri: 4,
        dikeluarkan: 0,
        aktif: 11,
        cuti: 0,
        other: 5,
      },
      genderBreakdown: {
        male: 64,
        female: 23,
      },
      byBatch: {
        "2013": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2015": {
          total: 8,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 2,
          },
          graduationYears: {
            "3": 7,
          },
        },
        "2016": {
          total: 9,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 1,
          },
          graduationYears: {
            "3": 1,
            "4": 1,
          },
        },
        "2017": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 1,
          },
          graduationYears: {
            "3": 2,
            "4": 1,
          },
        },
        "2018": {
          total: 5,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 1,
          },
          graduationYears: {
            "3": 2,
            "4": 1,
          },
        },
        "2019": {
          total: 9,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 3,
          },
          graduationYears: {
            "3": 4,
            "4": 3,
          },
        },
        "2020": {
          total: 11,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 8,
            female: 3,
          },
          graduationYears: {
            "3": 3,
          },
        },
        "2021": {
          total: 18,
          statusBreakdown: {
            lulus: 15,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 17,
            female: 1,
          },
          graduationYears: {
            "3": 5,
          },
        },
        "2022": {
          total: 6,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 4,
          },
          graduationYears: {},
        },
        "2023": {
          total: 9,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 7,
            female: 2,
          },
          graduationYears: {},
        },
        "2024": {
          total: 8,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 8,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 5,
          },
          graduationYears: {},
        },
      },
    },
    "230": {
      prodiCode: "230",
      prodiName: "Teknik Kimia",
      total: 449,
      statusBreakdown: {
        lulus: 285,
        undurDiri: 20,
        dikeluarkan: 8,
        aktif: 114,
        cuti: 0,
        other: 22,
      },
      genderBreakdown: {
        male: 254,
        female: 195,
      },
      byBatch: {
        "2003": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2008": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2014": {
          total: 5,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 2,
          },
          graduationYears: {
            "3": 3,
          },
        },
        "2015": {
          total: 23,
          statusBreakdown: {
            lulus: 23,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 13,
            female: 10,
          },
          graduationYears: {
            "3": 9,
            "4": 3,
          },
        },
        "2016": {
          total: 50,
          statusBreakdown: {
            lulus: 45,
            undurDiri: 4,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 27,
            female: 23,
          },
          graduationYears: {
            "3": 8,
            "4": 3,
          },
        },
        "2017": {
          total: 18,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 5,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 12,
          },
          graduationYears: {
            "3": 8,
            "4": 4,
          },
        },
        "2018": {
          total: 40,
          statusBreakdown: {
            lulus: 37,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 13,
            female: 27,
          },
          graduationYears: {
            "3": 23,
            "4": 2,
          },
        },
        "2019": {
          total: 37,
          statusBreakdown: {
            lulus: 35,
            undurDiri: 0,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 21,
            female: 16,
          },
          graduationYears: {
            "3": 9,
            "4": 3,
          },
        },
        "2020": {
          total: 46,
          statusBreakdown: {
            lulus: 36,
            undurDiri: 3,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 25,
            female: 21,
          },
          graduationYears: {
            "3": 7,
            "4": 2,
          },
        },
        "2021": {
          total: 47,
          statusBreakdown: {
            lulus: 41,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 22,
            female: 25,
          },
          graduationYears: {
            "3": 9,
            "4": 1,
          },
        },
        "2022": {
          total: 32,
          statusBreakdown: {
            lulus: 25,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 17,
            female: 15,
          },
          graduationYears: {
            "3": 2,
          },
        },
        "2023": {
          total: 114,
          statusBreakdown: {
            lulus: 24,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 84,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 86,
            female: 28,
          },
          graduationYears: {},
        },
        "2024": {
          total: 35,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 27,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 20,
            female: 15,
          },
          graduationYears: {},
        },
      },
    },
    "231": {
      prodiCode: "231",
      prodiName: "Teknik Mesin",
      total: 554,
      statusBreakdown: {
        lulus: 358,
        undurDiri: 23,
        dikeluarkan: 6,
        aktif: 148,
        cuti: 0,
        other: 19,
      },
      genderBreakdown: {
        male: 469,
        female: 85,
      },
      byBatch: {
        "2004": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2012": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {
            "3": 2,
          },
        },
        "2014": {
          total: 15,
          statusBreakdown: {
            lulus: 15,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 15,
            female: 0,
          },
          graduationYears: {
            "3": 8,
            "4": 3,
            "5": 1,
          },
        },
        "2015": {
          total: 27,
          statusBreakdown: {
            lulus: 27,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 18,
            female: 9,
          },
          graduationYears: {
            "3": 15,
            "4": 1,
          },
        },
        "2016": {
          total: 47,
          statusBreakdown: {
            lulus: 42,
            undurDiri: 2,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 42,
            female: 5,
          },
          graduationYears: {
            "3": 15,
            "4": 5,
          },
        },
        "2017": {
          total: 29,
          statusBreakdown: {
            lulus: 28,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 27,
            female: 2,
          },
          graduationYears: {
            "3": 11,
            "4": 4,
          },
        },
        "2018": {
          total: 49,
          statusBreakdown: {
            lulus: 42,
            undurDiri: 7,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 39,
            female: 10,
          },
          graduationYears: {
            "3": 28,
            "4": 4,
          },
        },
        "2019": {
          total: 29,
          statusBreakdown: {
            lulus: 27,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 24,
            female: 5,
          },
          graduationYears: {
            "3": 9,
            "4": 4,
          },
        },
        "2020": {
          total: 67,
          statusBreakdown: {
            lulus: 58,
            undurDiri: 4,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 57,
            female: 10,
          },
          graduationYears: {
            "3": 35,
            "4": 5,
          },
        },
        "2021": {
          total: 29,
          statusBreakdown: {
            lulus: 24,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 24,
            female: 5,
          },
          graduationYears: {
            "3": 10,
            "4": 3,
          },
        },
        "2022": {
          total: 110,
          statusBreakdown: {
            lulus: 86,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 16,
            cuti: 0,
            other: 7,
          },
          genderBreakdown: {
            male: 99,
            female: 11,
          },
          graduationYears: {
            "3": 24,
          },
        },
        "2023": {
          total: 60,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 5,
            dikeluarkan: 0,
            aktif: 47,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 52,
            female: 8,
          },
          graduationYears: {},
        },
        "2024": {
          total: 89,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 84,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 70,
            female: 19,
          },
          graduationYears: {},
        },
      },
    },
    "232": {
      prodiCode: "232",
      prodiName: "Teknik Elektro",
      total: 1450,
      statusBreakdown: {
        lulus: 1081,
        undurDiri: 67,
        dikeluarkan: 18,
        aktif: 202,
        cuti: 0,
        other: 82,
      },
      genderBreakdown: {
        male: 1035,
        female: 415,
      },
      byBatch: {
        "2000": {
          total: 7,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 7,
          },
          genderBreakdown: {
            male: 0,
            female: 7,
          },
          graduationYears: {},
        },
        "2001": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2002": {
          total: 8,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 2,
            female: 6,
          },
          graduationYears: {},
        },
        "2003": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 0,
          },
          graduationYears: {},
        },
        "2004": {
          total: 5,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 3,
            female: 2,
          },
          graduationYears: {},
        },
        "2005": {
          total: 5,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 1,
            female: 4,
          },
          graduationYears: {},
        },
        "2006": {
          total: 10,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 7,
          },
          genderBreakdown: {
            male: 3,
            female: 7,
          },
          graduationYears: {},
        },
        "2007": {
          total: 6,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 2,
            female: 4,
          },
          graduationYears: {},
        },
        "2008": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2009": {
          total: 10,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 7,
          },
          genderBreakdown: {
            male: 2,
            female: 8,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2010": {
          total: 12,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 11,
          },
          genderBreakdown: {
            male: 1,
            female: 11,
          },
          graduationYears: {},
        },
        "2013": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2014": {
          total: 34,
          statusBreakdown: {
            lulus: 32,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 29,
            female: 5,
          },
          graduationYears: {
            "3": 25,
            "4": 7,
          },
        },
        "2015": {
          total: 132,
          statusBreakdown: {
            lulus: 128,
            undurDiri: 2,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 94,
            female: 38,
          },
          graduationYears: {
            "3": 69,
            "4": 22,
          },
        },
        "2016": {
          total: 168,
          statusBreakdown: {
            lulus: 164,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 128,
            female: 40,
          },
          graduationYears: {
            "3": 49,
            "4": 4,
            "5": 3,
          },
        },
        "2017": {
          total: 75,
          statusBreakdown: {
            lulus: 68,
            undurDiri: 7,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 49,
            female: 26,
          },
          graduationYears: {
            "3": 41,
            "4": 25,
            "5": 1,
          },
        },
        "2018": {
          total: 127,
          statusBreakdown: {
            lulus: 113,
            undurDiri: 13,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 89,
            female: 38,
          },
          graduationYears: {
            "3": 40,
            "4": 12,
          },
        },
        "2019": {
          total: 123,
          statusBreakdown: {
            lulus: 115,
            undurDiri: 8,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 98,
            female: 25,
          },
          graduationYears: {
            "3": 37,
            "4": 24,
          },
        },
        "2020": {
          total: 175,
          statusBreakdown: {
            lulus: 144,
            undurDiri: 12,
            dikeluarkan: 9,
            aktif: 0,
            cuti: 0,
            other: 10,
          },
          genderBreakdown: {
            male: 123,
            female: 52,
          },
          graduationYears: {
            "3": 51,
            "4": 39,
          },
        },
        "2021": {
          total: 150,
          statusBreakdown: {
            lulus: 117,
            undurDiri: 15,
            dikeluarkan: 4,
            aktif: 9,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 115,
            female: 35,
          },
          graduationYears: {
            "3": 20,
            "4": 11,
          },
        },
        "2022": {
          total: 179,
          statusBreakdown: {
            lulus: 151,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 20,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 141,
            female: 38,
          },
          graduationYears: {
            "3": 12,
          },
        },
        "2023": {
          total: 98,
          statusBreakdown: {
            lulus: 29,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 63,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 74,
            female: 24,
          },
          graduationYears: {},
        },
        "2024": {
          total: 120,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 110,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 78,
            female: 42,
          },
          graduationYears: {},
        },
      },
    },
    "233": {
      prodiCode: "233",
      prodiName: "Teknik Fisika",
      total: 176,
      statusBreakdown: {
        lulus: 145,
        undurDiri: 1,
        dikeluarkan: 0,
        aktif: 17,
        cuti: 0,
        other: 13,
      },
      genderBreakdown: {
        male: 112,
        female: 64,
      },
      byBatch: {
        "2015": {
          total: 13,
          statusBreakdown: {
            lulus: 13,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 5,
          },
          graduationYears: {
            "3": 9,
          },
        },
        "2016": {
          total: 14,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 7,
          },
          graduationYears: {
            "3": 8,
          },
        },
        "2017": {
          total: 6,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 2,
          },
          graduationYears: {
            "3": 4,
            "4": 1,
          },
        },
        "2018": {
          total: 15,
          statusBreakdown: {
            lulus: 15,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 10,
            female: 5,
          },
          graduationYears: {
            "3": 5,
            "4": 3,
          },
        },
        "2019": {
          total: 20,
          statusBreakdown: {
            lulus: 20,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 11,
            female: 9,
          },
          graduationYears: {
            "3": 10,
          },
        },
        "2020": {
          total: 24,
          statusBreakdown: {
            lulus: 24,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 16,
            female: 8,
          },
          graduationYears: {
            "3": 11,
          },
        },
        "2021": {
          total: 10,
          statusBreakdown: {
            lulus: 10,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 3,
          },
          graduationYears: {
            "3": 2,
          },
        },
        "2022": {
          total: 42,
          statusBreakdown: {
            lulus: 38,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 31,
            female: 11,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2023": {
          total: 15,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 7,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 9,
            female: 6,
          },
          graduationYears: {},
        },
        "2024": {
          total: 17,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 10,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 9,
            female: 8,
          },
          graduationYears: {},
        },
      },
    },
    "234": {
      prodiCode: "234",
      prodiName: "Teknik dan Manajemen Industri",
      total: 554,
      statusBreakdown: {
        lulus: 417,
        undurDiri: 27,
        dikeluarkan: 7,
        aktif: 92,
        cuti: 0,
        other: 11,
      },
      genderBreakdown: {
        male: 289,
        female: 265,
      },
      byBatch: {
        "2003": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 0,
          },
          graduationYears: {},
        },
        "2007": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2010": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2014": {
          total: 7,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 3,
          },
          graduationYears: {
            "3": 7,
          },
        },
        "2015": {
          total: 54,
          statusBreakdown: {
            lulus: 54,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 35,
            female: 19,
          },
          graduationYears: {
            "3": 16,
            "4": 1,
          },
        },
        "2016": {
          total: 86,
          statusBreakdown: {
            lulus: 77,
            undurDiri: 5,
            dikeluarkan: 4,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 46,
            female: 40,
          },
          graduationYears: {
            "3": 34,
            "4": 15,
            "5": 2,
          },
        },
        "2017": {
          total: 32,
          statusBreakdown: {
            lulus: 25,
            undurDiri: 7,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 14,
            female: 18,
          },
          graduationYears: {
            "3": 14,
            "4": 11,
          },
        },
        "2018": {
          total: 81,
          statusBreakdown: {
            lulus: 76,
            undurDiri: 5,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 43,
            female: 38,
          },
          graduationYears: {
            "3": 45,
            "4": 14,
          },
        },
        "2019": {
          total: 28,
          statusBreakdown: {
            lulus: 25,
            undurDiri: 1,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 15,
            female: 13,
          },
          graduationYears: {
            "3": 10,
            "4": 9,
          },
        },
        "2020": {
          total: 45,
          statusBreakdown: {
            lulus: 38,
            undurDiri: 7,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 23,
            female: 22,
          },
          graduationYears: {
            "3": 21,
            "4": 7,
          },
        },
        "2021": {
          total: 58,
          statusBreakdown: {
            lulus: 49,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 2,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 25,
            female: 33,
          },
          graduationYears: {
            "3": 15,
            "4": 5,
          },
        },
        "2022": {
          total: 72,
          statusBreakdown: {
            lulus: 60,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 9,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 36,
            female: 36,
          },
          graduationYears: {
            "3": 9,
          },
        },
        "2023": {
          total: 26,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 23,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 13,
            female: 13,
          },
          graduationYears: {},
        },
        "2024": {
          total: 61,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 58,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 32,
            female: 29,
          },
          graduationYears: {},
        },
      },
    },
    "235": {
      prodiCode: "235",
      prodiName: "Informatika",
      total: 595,
      statusBreakdown: {
        lulus: 375,
        undurDiri: 61,
        dikeluarkan: 17,
        aktif: 121,
        cuti: 0,
        other: 21,
      },
      genderBreakdown: {
        male: 424,
        female: 171,
      },
      byBatch: {
        "2014": {
          total: 30,
          statusBreakdown: {
            lulus: 23,
            undurDiri: 6,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 21,
            female: 9,
          },
          graduationYears: {
            "3": 19,
            "4": 4,
          },
        },
        "2015": {
          total: 26,
          statusBreakdown: {
            lulus: 22,
            undurDiri: 3,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 22,
            female: 4,
          },
          graduationYears: {
            "3": 16,
            "4": 4,
          },
        },
        "2016": {
          total: 81,
          statusBreakdown: {
            lulus: 63,
            undurDiri: 14,
            dikeluarkan: 4,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 53,
            female: 28,
          },
          graduationYears: {
            "3": 16,
            "4": 3,
            "5": 1,
          },
        },
        "2017": {
          total: 13,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 5,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 11,
            female: 2,
          },
          graduationYears: {
            "3": 4,
            "4": 1,
          },
        },
        "2018": {
          total: 33,
          statusBreakdown: {
            lulus: 25,
            undurDiri: 8,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 26,
            female: 7,
          },
          graduationYears: {
            "3": 7,
            "4": 3,
          },
        },
        "2019": {
          total: 32,
          statusBreakdown: {
            lulus: 28,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 21,
            female: 11,
          },
          graduationYears: {
            "3": 6,
            "4": 3,
          },
        },
        "2020": {
          total: 56,
          statusBreakdown: {
            lulus: 45,
            undurDiri: 7,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 38,
            female: 18,
          },
          graduationYears: {
            "3": 10,
            "4": 7,
          },
        },
        "2021": {
          total: 95,
          statusBreakdown: {
            lulus: 66,
            undurDiri: 11,
            dikeluarkan: 7,
            aktif: 2,
            cuti: 0,
            other: 9,
          },
          genderBreakdown: {
            male: 71,
            female: 24,
          },
          graduationYears: {
            "3": 21,
            "4": 5,
          },
        },
        "2022": {
          total: 73,
          statusBreakdown: {
            lulus: 60,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 9,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 55,
            female: 18,
          },
          graduationYears: {
            "3": 11,
          },
        },
        "2023": {
          total: 64,
          statusBreakdown: {
            lulus: 33,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 25,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 46,
            female: 18,
          },
          graduationYears: {},
        },
        "2024": {
          total: 92,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 85,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 60,
            female: 32,
          },
          graduationYears: {},
        },
      },
    },
    "236": {
      prodiCode: "236",
      prodiName: "Aeronotika dan Astronotika",
      total: 318,
      statusBreakdown: {
        lulus: 252,
        undurDiri: 9,
        dikeluarkan: 0,
        aktif: 49,
        cuti: 0,
        other: 8,
      },
      genderBreakdown: {
        male: 265,
        female: 53,
      },
      byBatch: {
        "2014": {
          total: 2,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 0,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2015": {
          total: 12,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 11,
            female: 1,
          },
          graduationYears: {
            "3": 8,
          },
        },
        "2016": {
          total: 47,
          statusBreakdown: {
            lulus: 45,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 34,
            female: 13,
          },
          graduationYears: {
            "3": 21,
            "4": 4,
            "5": 1,
          },
        },
        "2017": {
          total: 9,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 1,
          },
          graduationYears: {
            "3": 6,
            "4": 3,
          },
        },
        "2018": {
          total: 30,
          statusBreakdown: {
            lulus: 27,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 26,
            female: 4,
          },
          graduationYears: {
            "3": 14,
          },
        },
        "2019": {
          total: 28,
          statusBreakdown: {
            lulus: 28,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 23,
            female: 5,
          },
          graduationYears: {
            "3": 11,
            "4": 2,
          },
        },
        "2020": {
          total: 41,
          statusBreakdown: {
            lulus: 39,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 38,
            female: 3,
          },
          graduationYears: {
            "3": 8,
            "4": 4,
          },
        },
        "2021": {
          total: 51,
          statusBreakdown: {
            lulus: 48,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 42,
            female: 9,
          },
          graduationYears: {
            "3": 7,
            "4": 1,
          },
        },
        "2022": {
          total: 31,
          statusBreakdown: {
            lulus: 26,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 4,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 24,
            female: 7,
          },
          graduationYears: {
            "3": 3,
          },
        },
        "2023": {
          total: 29,
          statusBreakdown: {
            lulus: 15,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 12,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 26,
            female: 3,
          },
          graduationYears: {},
        },
        "2024": {
          total: 38,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 33,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 31,
            female: 7,
          },
          graduationYears: {},
        },
      },
    },
    "237": {
      prodiCode: "237",
      prodiName: "Ilmu dan Teknik Material",
      total: 175,
      statusBreakdown: {
        lulus: 144,
        undurDiri: 5,
        dikeluarkan: 2,
        aktif: 19,
        cuti: 0,
        other: 5,
      },
      genderBreakdown: {
        male: 113,
        female: 62,
      },
      byBatch: {
        "2014": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {
            "3": 1,
            "4": 1,
          },
        },
        "2015": {
          total: 12,
          statusBreakdown: {
            lulus: 11,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 6,
          },
          graduationYears: {
            "3": 6,
            "4": 1,
          },
        },
        "2016": {
          total: 14,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 6,
          },
          graduationYears: {
            "3": 5,
            "4": 2,
          },
        },
        "2017": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 0,
          },
          graduationYears: {
            "3": 3,
          },
        },
        "2018": {
          total: 14,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 6,
          },
          graduationYears: {
            "3": 9,
          },
        },
        "2019": {
          total: 23,
          statusBreakdown: {
            lulus: 23,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 16,
            female: 7,
          },
          graduationYears: {
            "3": 12,
          },
        },
        "2020": {
          total: 25,
          statusBreakdown: {
            lulus: 23,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 18,
            female: 7,
          },
          graduationYears: {
            "3": 11,
          },
        },
        "2021": {
          total: 32,
          statusBreakdown: {
            lulus: 28,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 20,
            female: 12,
          },
          graduationYears: {
            "3": 4,
          },
        },
        "2022": {
          total: 24,
          statusBreakdown: {
            lulus: 19,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 19,
            female: 5,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2023": {
          total: 11,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 7,
            female: 4,
          },
          graduationYears: {},
        },
        "2024": {
          total: 15,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 14,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 7,
            female: 8,
          },
          graduationYears: {},
        },
      },
    },
    "238": {
      prodiCode: "238",
      prodiName: "Instrumentasi dan Kontrol",
      total: 139,
      statusBreakdown: {
        lulus: 100,
        undurDiri: 3,
        dikeluarkan: 3,
        aktif: 25,
        cuti: 0,
        other: 8,
      },
      genderBreakdown: {
        male: 94,
        female: 45,
      },
      byBatch: {
        "2014": {
          total: 4,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 0,
          },
          graduationYears: {
            "3": 2,
            "4": 2,
          },
        },
        "2015": {
          total: 9,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 2,
          },
          graduationYears: {
            "3": 2,
            "4": 5,
          },
        },
        "2016": {
          total: 12,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 4,
          },
          graduationYears: {
            "3": 5,
            "4": 2,
          },
        },
        "2017": {
          total: 10,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 4,
          },
          graduationYears: {
            "3": 7,
            "4": 2,
          },
        },
        "2018": {
          total: 10,
          statusBreakdown: {
            lulus: 10,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 3,
          },
          graduationYears: {
            "3": 7,
            "4": 3,
          },
        },
        "2019": {
          total: 13,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 5,
          },
          graduationYears: {
            "3": 5,
            "4": 2,
          },
        },
        "2020": {
          total: 16,
          statusBreakdown: {
            lulus: 11,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 13,
            female: 3,
          },
          graduationYears: {
            "3": 3,
            "4": 1,
          },
        },
        "2021": {
          total: 20,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 12,
            female: 8,
          },
          graduationYears: {
            "3": 5,
            "4": 2,
          },
        },
        "2022": {
          total: 15,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 12,
            female: 3,
          },
          graduationYears: {
            "3": 3,
          },
        },
        "2023": {
          total: 15,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 10,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 11,
            female: 4,
          },
          graduationYears: {},
        },
        "2024": {
          total: 15,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 13,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 9,
          },
          graduationYears: {},
        },
      },
    },
    "240": {
      prodiCode: "240",
      prodiName: "Studi Pembangunan",
      total: 288,
      statusBreakdown: {
        lulus: 213,
        undurDiri: 10,
        dikeluarkan: 2,
        aktif: 53,
        cuti: 0,
        other: 10,
      },
      genderBreakdown: {
        male: 169,
        female: 119,
      },
      byBatch: {
        "2012": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2014": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 3,
          },
          graduationYears: {
            "3": 3,
          },
        },
        "2015": {
          total: 16,
          statusBreakdown: {
            lulus: 16,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 9,
          },
          graduationYears: {
            "3": 6,
            "4": 2,
          },
        },
        "2016": {
          total: 17,
          statusBreakdown: {
            lulus: 17,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 10,
            female: 7,
          },
          graduationYears: {
            "3": 5,
          },
        },
        "2017": {
          total: 6,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 3,
          },
          graduationYears: {
            "3": 3,
            "4": 1,
          },
        },
        "2018": {
          total: 24,
          statusBreakdown: {
            lulus: 24,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 14,
            female: 10,
          },
          graduationYears: {
            "3": 13,
            "4": 6,
          },
        },
        "2019": {
          total: 21,
          statusBreakdown: {
            lulus: 19,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 15,
            female: 6,
          },
          graduationYears: {
            "3": 6,
            "4": 4,
          },
        },
        "2020": {
          total: 56,
          statusBreakdown: {
            lulus: 48,
            undurDiri: 4,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 31,
            female: 25,
          },
          graduationYears: {
            "3": 33,
            "4": 6,
          },
        },
        "2021": {
          total: 52,
          statusBreakdown: {
            lulus: 48,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 39,
            female: 13,
          },
          graduationYears: {
            "3": 6,
            "4": 1,
          },
        },
        "2022": {
          total: 25,
          statusBreakdown: {
            lulus: 20,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 15,
            female: 10,
          },
          graduationYears: {
            "3": 2,
          },
        },
        "2023": {
          total: 34,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 19,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 20,
            female: 14,
          },
          graduationYears: {},
        },
        "2024": {
          total: 33,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 31,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 15,
            female: 18,
          },
          graduationYears: {},
        },
      },
    },
    "241": {
      prodiCode: "241",
      prodiName: "Unknown Prodi",
      total: 2,
      statusBreakdown: {
        lulus: 2,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 2,
        female: 0,
      },
      byBatch: {
        "2003": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 0,
          },
          graduationYears: {},
        },
      },
    },
    "242": {
      prodiCode: "242",
      prodiName: "Transportasi",
      total: 158,
      statusBreakdown: {
        lulus: 85,
        undurDiri: 5,
        dikeluarkan: 1,
        aktif: 19,
        cuti: 0,
        other: 48,
      },
      genderBreakdown: {
        male: 53,
        female: 105,
      },
      byBatch: {
        "2000": {
          total: 12,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 12,
          },
          genderBreakdown: {
            male: 0,
            female: 12,
          },
          graduationYears: {},
        },
        "2002": {
          total: 6,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 0,
            female: 6,
          },
          graduationYears: {},
        },
        "2003": {
          total: 6,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 0,
            female: 6,
          },
          graduationYears: {},
        },
        "2004": {
          total: 7,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 7,
          },
          genderBreakdown: {
            male: 0,
            female: 7,
          },
          graduationYears: {},
        },
        "2005": {
          total: 5,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 0,
            female: 5,
          },
          graduationYears: {},
        },
        "2006": {
          total: 5,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 0,
            female: 5,
          },
          graduationYears: {},
        },
        "2007": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2009": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2014": {
          total: 4,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 3,
          },
          graduationYears: {
            "3": 4,
          },
        },
        "2015": {
          total: 4,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 1,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2016": {
          total: 11,
          statusBreakdown: {
            lulus: 10,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 8,
          },
          graduationYears: {
            "3": 5,
          },
        },
        "2018": {
          total: 11,
          statusBreakdown: {
            lulus: 10,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 5,
          },
          graduationYears: {
            "3": 6,
            "4": 1,
          },
        },
        "2019": {
          total: 9,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 6,
          },
          graduationYears: {
            "3": 2,
          },
        },
        "2020": {
          total: 12,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 4,
          },
          graduationYears: {
            "3": 1,
            "4": 2,
          },
        },
        "2021": {
          total: 22,
          statusBreakdown: {
            lulus: 16,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 9,
            female: 13,
          },
          graduationYears: {
            "3": 3,
          },
        },
        "2022": {
          total: 7,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 3,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2023": {
          total: 18,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 11,
            female: 7,
          },
          graduationYears: {},
        },
        "2024": {
          total: 17,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 16,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 5,
            female: 12,
          },
          graduationYears: {},
        },
      },
    },
    "246": {
      prodiCode: "246",
      prodiName: "Pengajaran Matematika",
      total: 86,
      statusBreakdown: {
        lulus: 63,
        undurDiri: 5,
        dikeluarkan: 0,
        aktif: 16,
        cuti: 0,
        other: 2,
      },
      genderBreakdown: {
        male: 32,
        female: 54,
      },
      byBatch: {
        "2019": {
          total: 13,
          statusBreakdown: {
            lulus: 13,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 10,
          },
          graduationYears: {
            "3": 10,
            "4": 2,
          },
        },
        "2020": {
          total: 22,
          statusBreakdown: {
            lulus: 20,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 15,
          },
          graduationYears: {
            "3": 13,
            "4": 1,
          },
        },
        "2021": {
          total: 19,
          statusBreakdown: {
            lulus: 18,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 11,
          },
          graduationYears: {},
        },
        "2022": {
          total: 9,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 4,
          },
          graduationYears: {},
        },
        "2023": {
          total: 13,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 6,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 5,
            female: 8,
          },
          graduationYears: {},
        },
        "2024": {
          total: 10,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 9,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 4,
            female: 6,
          },
          graduationYears: {},
        },
      },
    },
    "247": {
      prodiCode: "247",
      prodiName: "Pengajaran Fisika",
      total: 75,
      statusBreakdown: {
        lulus: 52,
        undurDiri: 3,
        dikeluarkan: 2,
        aktif: 18,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 19,
        female: 56,
      },
      byBatch: {
        "2019": {
          total: 8,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 6,
          },
          graduationYears: {
            "3": 5,
            "4": 1,
          },
        },
        "2020": {
          total: 15,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 1,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 10,
          },
          graduationYears: {
            "3": 8,
            "4": 2,
          },
        },
        "2021": {
          total: 17,
          statusBreakdown: {
            lulus: 16,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 13,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2022": {
          total: 7,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 6,
          },
          graduationYears: {},
        },
        "2023": {
          total: 10,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 8,
          },
          graduationYears: {},
        },
        "2024": {
          total: 18,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 17,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 13,
          },
          graduationYears: {},
        },
      },
    },
    "248": {
      prodiCode: "248",
      prodiName: "Pengajaran Kimia",
      total: 47,
      statusBreakdown: {
        lulus: 28,
        undurDiri: 1,
        dikeluarkan: 0,
        aktif: 16,
        cuti: 0,
        other: 2,
      },
      genderBreakdown: {
        male: 14,
        female: 33,
      },
      byBatch: {
        "2001": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2019": {
          total: 7,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 6,
          },
          graduationYears: {
            "3": 6,
          },
        },
        "2020": {
          total: 12,
          statusBreakdown: {
            lulus: 11,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 9,
          },
          graduationYears: {
            "3": 11,
          },
        },
        "2021": {
          total: 6,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 3,
            female: 3,
          },
          graduationYears: {},
        },
        "2022": {
          total: 4,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 3,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2023": {
          total: 11,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 11,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 8,
          },
          graduationYears: {},
        },
        "2024": {
          total: 6,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 5,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 2,
            female: 4,
          },
          graduationYears: {},
        },
      },
    },
    "249": {
      prodiCode: "249",
      prodiName: "Ilmu dan Rekayasa Nuklir",
      total: 27,
      statusBreakdown: {
        lulus: 14,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 13,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 16,
        female: 11,
      },
      byBatch: {
        "2021": {
          total: 5,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 3,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2022": {
          total: 8,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 3,
          },
          graduationYears: {},
        },
        "2023": {
          total: 8,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 7,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 2,
          },
          graduationYears: {},
        },
        "2024": {
          total: 6,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 6,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 3,
          },
          graduationYears: {},
        },
      },
    },
    "250": {
      prodiCode: "250",
      prodiName: "Teknik Sipil",
      total: 1147,
      statusBreakdown: {
        lulus: 829,
        undurDiri: 78,
        dikeluarkan: 21,
        aktif: 178,
        cuti: 0,
        other: 41,
      },
      genderBreakdown: {
        male: 744,
        female: 403,
      },
      byBatch: {
        "1999": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2012": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2014": {
          total: 13,
          statusBreakdown: {
            lulus: 11,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 7,
          },
          graduationYears: {
            "3": 7,
            "4": 4,
          },
        },
        "2015": {
          total: 51,
          statusBreakdown: {
            lulus: 45,
            undurDiri: 5,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 35,
            female: 16,
          },
          graduationYears: {
            "3": 28,
            "4": 10,
          },
        },
        "2016": {
          total: 107,
          statusBreakdown: {
            lulus: 100,
            undurDiri: 7,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 71,
            female: 36,
          },
          graduationYears: {
            "3": 53,
            "4": 12,
            "5": 2,
          },
        },
        "2017": {
          total: 78,
          statusBreakdown: {
            lulus: 63,
            undurDiri: 14,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 45,
            female: 33,
          },
          graduationYears: {
            "3": 34,
            "4": 21,
            "5": 7,
          },
        },
        "2018": {
          total: 108,
          statusBreakdown: {
            lulus: 88,
            undurDiri: 16,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 71,
            female: 37,
          },
          graduationYears: {
            "3": 46,
            "4": 26,
          },
        },
        "2019": {
          total: 106,
          statusBreakdown: {
            lulus: 84,
            undurDiri: 11,
            dikeluarkan: 11,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 64,
            female: 42,
          },
          graduationYears: {
            "3": 28,
            "4": 31,
          },
        },
        "2020": {
          total: 162,
          statusBreakdown: {
            lulus: 146,
            undurDiri: 11,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 107,
            female: 55,
          },
          graduationYears: {
            "3": 79,
            "4": 26,
          },
        },
        "2021": {
          total: 132,
          statusBreakdown: {
            lulus: 96,
            undurDiri: 9,
            dikeluarkan: 1,
            aktif: 8,
            cuti: 0,
            other: 18,
          },
          genderBreakdown: {
            male: 86,
            female: 46,
          },
          graduationYears: {
            "3": 27,
            "4": 7,
          },
        },
        "2022": {
          total: 148,
          statusBreakdown: {
            lulus: 127,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 8,
            cuti: 0,
            other: 12,
          },
          genderBreakdown: {
            male: 113,
            female: 35,
          },
          graduationYears: {
            "3": 8,
          },
        },
        "2023": {
          total: 118,
          statusBreakdown: {
            lulus: 50,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 59,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 61,
            female: 57,
          },
          graduationYears: {},
        },
        "2024": {
          total: 122,
          statusBreakdown: {
            lulus: 17,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 103,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 83,
            female: 39,
          },
          graduationYears: {},
        },
      },
    },
    "251": {
      prodiCode: "251",
      prodiName: "Teknik Geodesi dan Geomatika",
      total: 243,
      statusBreakdown: {
        lulus: 184,
        undurDiri: 9,
        dikeluarkan: 1,
        aktif: 41,
        cuti: 0,
        other: 8,
      },
      genderBreakdown: {
        male: 150,
        female: 93,
      },
      byBatch: {
        "2000": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2014": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 3,
          },
          graduationYears: {
            "3": 2,
            "4": 1,
          },
        },
        "2015": {
          total: 6,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 3,
          },
          graduationYears: {
            "3": 3,
            "4": 1,
          },
        },
        "2016": {
          total: 13,
          statusBreakdown: {
            lulus: 13,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 7,
          },
          graduationYears: {
            "3": 4,
          },
        },
        "2017": {
          total: 7,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 2,
          },
          graduationYears: {
            "3": 3,
            "4": 2,
          },
        },
        "2018": {
          total: 16,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 9,
          },
          graduationYears: {
            "3": 2,
            "4": 1,
          },
        },
        "2019": {
          total: 14,
          statusBreakdown: {
            lulus: 13,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 11,
            female: 3,
          },
          graduationYears: {
            "3": 4,
            "4": 2,
          },
        },
        "2020": {
          total: 38,
          statusBreakdown: {
            lulus: 33,
            undurDiri: 3,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 26,
            female: 12,
          },
          graduationYears: {
            "3": 7,
            "4": 3,
          },
        },
        "2021": {
          total: 40,
          statusBreakdown: {
            lulus: 39,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 32,
            female: 8,
          },
          graduationYears: {
            "3": 8,
            "4": 4,
          },
        },
        "2022": {
          total: 30,
          statusBreakdown: {
            lulus: 27,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 14,
            female: 16,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2023": {
          total: 34,
          statusBreakdown: {
            lulus: 17,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 16,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 22,
            female: 12,
          },
          graduationYears: {},
        },
        "2024": {
          total: 41,
          statusBreakdown: {
            lulus: 13,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 25,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 23,
            female: 18,
          },
          graduationYears: {},
        },
      },
    },
    "252": {
      prodiCode: "252",
      prodiName: "Arsitektur",
      total: 471,
      statusBreakdown: {
        lulus: 345,
        undurDiri: 16,
        dikeluarkan: 3,
        aktif: 91,
        cuti: 0,
        other: 16,
      },
      genderBreakdown: {
        male: 203,
        female: 268,
      },
      byBatch: {
        "2000": {
          total: 3,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 0,
            female: 3,
          },
          graduationYears: {},
        },
        "2001": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2010": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2013": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2014": {
          total: 4,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 2,
          },
          graduationYears: {
            "3": 1,
            "4": 1,
          },
        },
        "2015": {
          total: 23,
          statusBreakdown: {
            lulus: 22,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 12,
            female: 11,
          },
          graduationYears: {
            "3": 8,
            "4": 4,
          },
        },
        "2016": {
          total: 31,
          statusBreakdown: {
            lulus: 30,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 15,
            female: 16,
          },
          graduationYears: {
            "3": 11,
            "4": 2,
          },
        },
        "2017": {
          total: 20,
          statusBreakdown: {
            lulus: 20,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 12,
          },
          graduationYears: {
            "3": 8,
            "4": 11,
          },
        },
        "2018": {
          total: 37,
          statusBreakdown: {
            lulus: 37,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 18,
            female: 19,
          },
          graduationYears: {
            "3": 18,
            "4": 7,
          },
        },
        "2019": {
          total: 35,
          statusBreakdown: {
            lulus: 35,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 16,
            female: 19,
          },
          graduationYears: {
            "3": 19,
          },
        },
        "2020": {
          total: 53,
          statusBreakdown: {
            lulus: 46,
            undurDiri: 5,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 24,
            female: 29,
          },
          graduationYears: {
            "3": 14,
            "4": 6,
          },
        },
        "2021": {
          total: 73,
          statusBreakdown: {
            lulus: 68,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 34,
            female: 39,
          },
          graduationYears: {
            "3": 9,
            "4": 2,
          },
        },
        "2022": {
          total: 59,
          statusBreakdown: {
            lulus: 53,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 23,
            female: 36,
          },
          graduationYears: {},
        },
        "2023": {
          total: 70,
          statusBreakdown: {
            lulus: 30,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 32,
            cuti: 0,
            other: 8,
          },
          genderBreakdown: {
            male: 30,
            female: 40,
          },
          graduationYears: {},
        },
        "2024": {
          total: 60,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 56,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 20,
            female: 40,
          },
          graduationYears: {},
        },
      },
    },
    "253": {
      prodiCode: "253",
      prodiName: "Teknik Lingkungan",
      total: 748,
      statusBreakdown: {
        lulus: 391,
        undurDiri: 35,
        dikeluarkan: 4,
        aktif: 133,
        cuti: 1,
        other: 184,
      },
      genderBreakdown: {
        male: 244,
        female: 504,
      },
      byBatch: {
        "2004": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2014": {
          total: 20,
          statusBreakdown: {
            lulus: 19,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 12,
            female: 8,
          },
          graduationYears: {
            "3": 16,
            "4": 3,
          },
        },
        "2015": {
          total: 30,
          statusBreakdown: {
            lulus: 29,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 10,
            female: 20,
          },
          graduationYears: {
            "3": 21,
            "4": 4,
          },
        },
        "2016": {
          total: 48,
          statusBreakdown: {
            lulus: 47,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 19,
            female: 29,
          },
          graduationYears: {
            "3": 18,
            "4": 3,
            "5": 1,
          },
        },
        "2017": {
          total: 42,
          statusBreakdown: {
            lulus: 34,
            undurDiri: 8,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 16,
            female: 26,
          },
          graduationYears: {
            "3": 23,
            "4": 9,
            "5": 1,
          },
        },
        "2018": {
          total: 56,
          statusBreakdown: {
            lulus: 52,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 13,
            female: 43,
          },
          graduationYears: {
            "3": 27,
            "4": 7,
          },
        },
        "2019": {
          total: 55,
          statusBreakdown: {
            lulus: 48,
            undurDiri: 5,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 18,
            female: 37,
          },
          graduationYears: {
            "3": 31,
            "4": 2,
          },
        },
        "2020": {
          total: 59,
          statusBreakdown: {
            lulus: 46,
            undurDiri: 6,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 7,
          },
          genderBreakdown: {
            male: 18,
            female: 41,
          },
          graduationYears: {
            "3": 30,
            "4": 5,
          },
        },
        "2021": {
          total: 113,
          statusBreakdown: {
            lulus: 51,
            undurDiri: 6,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 55,
          },
          genderBreakdown: {
            male: 19,
            female: 94,
          },
          graduationYears: {
            "3": 13,
            "4": 2,
          },
        },
        "2022": {
          total: 97,
          statusBreakdown: {
            lulus: 53,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 4,
            cuti: 0,
            other: 37,
          },
          genderBreakdown: {
            male: 35,
            female: 62,
          },
          graduationYears: {
            "3": 5,
          },
        },
        "2023": {
          total: 139,
          statusBreakdown: {
            lulus: 11,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 59,
            cuti: 0,
            other: 67,
          },
          genderBreakdown: {
            male: 59,
            female: 80,
          },
          graduationYears: {},
        },
        "2024": {
          total: 88,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 69,
            cuti: 1,
            other: 18,
          },
          genderBreakdown: {
            male: 24,
            female: 64,
          },
          graduationYears: {},
        },
      },
    },
    "254": {
      prodiCode: "254",
      prodiName: "Perencanaan Wilayah dan Kota",
      total: 552,
      statusBreakdown: {
        lulus: 461,
        undurDiri: 17,
        dikeluarkan: 1,
        aktif: 67,
        cuti: 0,
        other: 6,
      },
      genderBreakdown: {
        male: 259,
        female: 293,
      },
      byBatch: {
        "2008": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2015": {
          total: 32,
          statusBreakdown: {
            lulus: 32,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 15,
            female: 17,
          },
          graduationYears: {
            "3": 4,
          },
        },
        "2016": {
          total: 78,
          statusBreakdown: {
            lulus: 78,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 38,
            female: 40,
          },
          graduationYears: {
            "3": 13,
          },
        },
        "2017": {
          total: 13,
          statusBreakdown: {
            lulus: 11,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 6,
          },
          graduationYears: {
            "3": 9,
            "4": 1,
          },
        },
        "2018": {
          total: 54,
          statusBreakdown: {
            lulus: 54,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 22,
            female: 32,
          },
          graduationYears: {
            "3": 7,
            "4": 6,
          },
        },
        "2019": {
          total: 52,
          statusBreakdown: {
            lulus: 52,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 22,
            female: 30,
          },
          graduationYears: {
            "3": 9,
            "4": 2,
          },
        },
        "2020": {
          total: 73,
          statusBreakdown: {
            lulus: 66,
            undurDiri: 6,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 30,
            female: 43,
          },
          graduationYears: {
            "3": 11,
            "4": 8,
          },
        },
        "2021": {
          total: 80,
          statusBreakdown: {
            lulus: 72,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 42,
            female: 38,
          },
          graduationYears: {
            "3": 7,
            "4": 2,
          },
        },
        "2022": {
          total: 47,
          statusBreakdown: {
            lulus: 38,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 4,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 25,
            female: 22,
          },
          graduationYears: {},
        },
        "2023": {
          total: 83,
          statusBreakdown: {
            lulus: 56,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 24,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 43,
            female: 40,
          },
          graduationYears: {},
        },
        "2024": {
          total: 39,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 38,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 15,
            female: 24,
          },
          graduationYears: {},
        },
      },
    },
    "255": {
      prodiCode: "255",
      prodiName: "Teknik Kelautan",
      total: 134,
      statusBreakdown: {
        lulus: 96,
        undurDiri: 8,
        dikeluarkan: 2,
        aktif: 25,
        cuti: 0,
        other: 3,
      },
      genderBreakdown: {
        male: 94,
        female: 40,
      },
      byBatch: {
        "1999": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2014": {
          total: 5,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 2,
          },
          graduationYears: {
            "3": 2,
            "4": 2,
          },
        },
        "2015": {
          total: 9,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 1,
          },
          graduationYears: {
            "3": 6,
            "4": 2,
          },
        },
        "2016": {
          total: 15,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 10,
            female: 5,
          },
          graduationYears: {
            "3": 6,
            "4": 3,
            "5": 1,
          },
        },
        "2017": {
          total: 5,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 1,
          },
          graduationYears: {
            "3": 4,
          },
        },
        "2018": {
          total: 8,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 1,
          },
          graduationYears: {
            "3": 2,
            "4": 4,
          },
        },
        "2019": {
          total: 14,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 10,
            female: 4,
          },
          graduationYears: {
            "3": 2,
            "4": 3,
          },
        },
        "2020": {
          total: 24,
          statusBreakdown: {
            lulus: 19,
            undurDiri: 3,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 18,
            female: 6,
          },
          graduationYears: {
            "3": 3,
            "4": 2,
          },
        },
        "2021": {
          total: 19,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 16,
            female: 3,
          },
          graduationYears: {
            "3": 5,
          },
        },
        "2022": {
          total: 9,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 3,
          },
          graduationYears: {},
        },
        "2023": {
          total: 9,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 4,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 3,
            female: 6,
          },
          graduationYears: {},
        },
        "2024": {
          total: 16,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 16,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 8,
          },
          graduationYears: {},
        },
      },
    },
    "256": {
      prodiCode: "256",
      prodiName: "Rancang Kota",
      total: 171,
      statusBreakdown: {
        lulus: 129,
        undurDiri: 3,
        dikeluarkan: 1,
        aktif: 37,
        cuti: 0,
        other: 1,
      },
      genderBreakdown: {
        male: 72,
        female: 99,
      },
      byBatch: {
        "2014": {
          total: 5,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 1,
          },
          graduationYears: {
            "3": 5,
          },
        },
        "2015": {
          total: 16,
          statusBreakdown: {
            lulus: 15,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 11,
          },
          graduationYears: {
            "3": 5,
            "4": 1,
          },
        },
        "2016": {
          total: 17,
          statusBreakdown: {
            lulus: 16,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 11,
          },
          graduationYears: {
            "3": 6,
            "4": 2,
            "5": 1,
          },
        },
        "2017": {
          total: 11,
          statusBreakdown: {
            lulus: 11,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 8,
          },
          graduationYears: {
            "3": 5,
            "4": 6,
          },
        },
        "2018": {
          total: 16,
          statusBreakdown: {
            lulus: 16,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 9,
            female: 7,
          },
          graduationYears: {
            "3": 13,
            "4": 2,
          },
        },
        "2019": {
          total: 17,
          statusBreakdown: {
            lulus: 17,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 9,
          },
          graduationYears: {
            "3": 6,
            "4": 4,
          },
        },
        "2020": {
          total: 14,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 10,
            female: 4,
          },
          graduationYears: {
            "3": 7,
          },
        },
        "2021": {
          total: 16,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 9,
          },
          graduationYears: {
            "3": 3,
          },
        },
        "2022": {
          total: 15,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 7,
            female: 8,
          },
          graduationYears: {},
        },
        "2023": {
          total: 27,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 18,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 20,
          },
          graduationYears: {},
        },
        "2024": {
          total: 17,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 17,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 11,
          },
          graduationYears: {},
        },
      },
    },
    "257": {
      prodiCode: "257",
      prodiName: "Pengelolaan Infrastruktur Air Bersih dan Sanitasi",
      total: 119,
      statusBreakdown: {
        lulus: 83,
        undurDiri: 2,
        dikeluarkan: 0,
        aktif: 32,
        cuti: 0,
        other: 2,
      },
      genderBreakdown: {
        male: 44,
        female: 75,
      },
      byBatch: {
        "2014": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 2,
          },
          graduationYears: {
            "3": 1,
            "4": 1,
          },
        },
        "2015": {
          total: 5,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 4,
          },
          graduationYears: {
            "3": 2,
            "4": 3,
          },
        },
        "2016": {
          total: 9,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 5,
          },
          graduationYears: {
            "3": 4,
            "5": 1,
          },
        },
        "2017": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 2,
          },
          graduationYears: {
            "3": 2,
            "4": 1,
          },
        },
        "2018": {
          total: 7,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 2,
          },
          graduationYears: {
            "3": 1,
            "4": 1,
          },
        },
        "2019": {
          total: 12,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 8,
          },
          graduationYears: {
            "3": 2,
            "4": 3,
          },
        },
        "2020": {
          total: 21,
          statusBreakdown: {
            lulus: 20,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 6,
            female: 15,
          },
          graduationYears: {
            "3": 11,
          },
        },
        "2021": {
          total: 19,
          statusBreakdown: {
            lulus: 15,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 11,
            female: 8,
          },
          graduationYears: {
            "3": 5,
            "4": 1,
          },
        },
        "2022": {
          total: 11,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 4,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 9,
          },
          graduationYears: {},
        },
        "2023": {
          total: 16,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 11,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 5,
            female: 11,
          },
          graduationYears: {},
        },
        "2024": {
          total: 14,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 14,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 9,
          },
          graduationYears: {},
        },
      },
    },
    "258": {
      prodiCode: "258",
      prodiName: "Pengelolaan Sumberdaya Air (PSDA)",
      total: 233,
      statusBreakdown: {
        lulus: 183,
        undurDiri: 7,
        dikeluarkan: 0,
        aktif: 42,
        cuti: 0,
        other: 1,
      },
      genderBreakdown: {
        male: 137,
        female: 96,
      },
      byBatch: {
        "2019": {
          total: 7,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 5,
          },
          graduationYears: {
            "3": 3,
            "4": 2,
          },
        },
        "2020": {
          total: 60,
          statusBreakdown: {
            lulus: 55,
            undurDiri: 5,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 35,
            female: 25,
          },
          graduationYears: {
            "3": 12,
            "4": 2,
          },
        },
        "2021": {
          total: 52,
          statusBreakdown: {
            lulus: 50,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 30,
            female: 22,
          },
          graduationYears: {
            "3": 8,
          },
        },
        "2022": {
          total: 43,
          statusBreakdown: {
            lulus: 40,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 27,
            female: 16,
          },
          graduationYears: {
            "3": 2,
          },
        },
        "2023": {
          total: 30,
          statusBreakdown: {
            lulus: 22,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 7,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 16,
            female: 14,
          },
          graduationYears: {},
        },
        "2024": {
          total: 41,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 31,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 27,
            female: 14,
          },
          graduationYears: {},
        },
      },
    },
    "269": {
      prodiCode: "269",
      prodiName: "Sistem dan Teknik Jalan Raya",
      total: 204,
      statusBreakdown: {
        lulus: 161,
        undurDiri: 11,
        dikeluarkan: 2,
        aktif: 26,
        cuti: 0,
        other: 4,
      },
      genderBreakdown: {
        male: 119,
        female: 85,
      },
      byBatch: {
        "2014": {
          total: 5,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 1,
          },
          graduationYears: {
            "3": 4,
          },
        },
        "2015": {
          total: 12,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 9,
            female: 3,
          },
          graduationYears: {
            "3": 9,
            "4": 2,
          },
        },
        "2016": {
          total: 24,
          statusBreakdown: {
            lulus: 21,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 14,
            female: 10,
          },
          graduationYears: {
            "3": 12,
            "5": 2,
          },
        },
        "2017": {
          total: 8,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 2,
          },
          graduationYears: {
            "3": 5,
          },
        },
        "2018": {
          total: 13,
          statusBreakdown: {
            lulus: 11,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 7,
          },
          graduationYears: {
            "3": 10,
          },
        },
        "2019": {
          total: 15,
          statusBreakdown: {
            lulus: 13,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 7,
          },
          graduationYears: {
            "3": 7,
            "4": 2,
          },
        },
        "2020": {
          total: 24,
          statusBreakdown: {
            lulus: 21,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 12,
            female: 12,
          },
          graduationYears: {
            "3": 8,
          },
        },
        "2021": {
          total: 27,
          statusBreakdown: {
            lulus: 26,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 16,
            female: 11,
          },
          graduationYears: {},
        },
        "2022": {
          total: 24,
          statusBreakdown: {
            lulus: 23,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 15,
            female: 9,
          },
          graduationYears: {},
        },
        "2023": {
          total: 29,
          statusBreakdown: {
            lulus: 24,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 5,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 16,
            female: 13,
          },
          graduationYears: {},
        },
        "2024": {
          total: 23,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 20,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 13,
            female: 10,
          },
          graduationYears: {},
        },
      },
    },
    "270": {
      prodiCode: "270",
      prodiName: "Seni Rupa",
      total: 147,
      statusBreakdown: {
        lulus: 103,
        undurDiri: 8,
        dikeluarkan: 0,
        aktif: 22,
        cuti: 0,
        other: 14,
      },
      genderBreakdown: {
        male: 79,
        female: 68,
      },
      byBatch: {
        "2008": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2014": {
          total: 6,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 1,
          },
          graduationYears: {
            "3": 3,
            "4": 3,
          },
        },
        "2015": {
          total: 14,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 7,
          },
          graduationYears: {
            "3": 6,
            "4": 1,
          },
        },
        "2016": {
          total: 16,
          statusBreakdown: {
            lulus: 15,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 9,
            female: 7,
          },
          graduationYears: {
            "3": 8,
          },
        },
        "2017": {
          total: 6,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 2,
          },
          graduationYears: {
            "3": 5,
          },
        },
        "2018": {
          total: 14,
          statusBreakdown: {
            lulus: 13,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 9,
            female: 5,
          },
          graduationYears: {
            "3": 7,
          },
        },
        "2019": {
          total: 11,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 5,
          },
          graduationYears: {
            "3": 1,
            "4": 2,
          },
        },
        "2020": {
          total: 14,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 9,
          },
          graduationYears: {
            "3": 7,
          },
        },
        "2021": {
          total: 29,
          statusBreakdown: {
            lulus: 18,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 9,
          },
          genderBreakdown: {
            male: 17,
            female: 12,
          },
          graduationYears: {
            "3": 3,
          },
        },
        "2022": {
          total: 12,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 4,
            female: 8,
          },
          graduationYears: {},
        },
        "2023": {
          total: 8,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 7,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 2,
            female: 6,
          },
          graduationYears: {},
        },
        "2024": {
          total: 16,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 15,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 11,
            female: 5,
          },
          graduationYears: {},
        },
      },
    },
    "271": {
      prodiCode: "271",
      prodiName: "Desain",
      total: 855,
      statusBreakdown: {
        lulus: 619,
        undurDiri: 29,
        dikeluarkan: 5,
        aktif: 159,
        cuti: 0,
        other: 43,
      },
      genderBreakdown: {
        male: 310,
        female: 545,
      },
      byBatch: {
        "2004": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2011": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2013": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2014": {
          total: 18,
          statusBreakdown: {
            lulus: 16,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 9,
            female: 9,
          },
          graduationYears: {
            "3": 15,
            "4": 1,
          },
        },
        "2015": {
          total: 56,
          statusBreakdown: {
            lulus: 52,
            undurDiri: 3,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 27,
            female: 29,
          },
          graduationYears: {
            "3": 36,
            "4": 6,
          },
        },
        "2016": {
          total: 82,
          statusBreakdown: {
            lulus: 79,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 36,
            female: 46,
          },
          graduationYears: {
            "3": 25,
            "5": 6,
          },
        },
        "2017": {
          total: 40,
          statusBreakdown: {
            lulus: 37,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 26,
            female: 14,
          },
          graduationYears: {
            "3": 15,
            "4": 15,
          },
        },
        "2018": {
          total: 86,
          statusBreakdown: {
            lulus: 82,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 26,
            female: 60,
          },
          graduationYears: {
            "3": 48,
            "4": 4,
          },
        },
        "2019": {
          total: 68,
          statusBreakdown: {
            lulus: 61,
            undurDiri: 5,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 16,
            female: 52,
          },
          graduationYears: {
            "3": 19,
            "4": 9,
          },
        },
        "2020": {
          total: 117,
          statusBreakdown: {
            lulus: 97,
            undurDiri: 4,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 15,
          },
          genderBreakdown: {
            male: 34,
            female: 83,
          },
          graduationYears: {
            "3": 23,
            "4": 10,
          },
        },
        "2021": {
          total: 147,
          statusBreakdown: {
            lulus: 125,
            undurDiri: 5,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 0,
            other: 15,
          },
          genderBreakdown: {
            male: 52,
            female: 95,
          },
          graduationYears: {
            "3": 11,
            "4": 1,
          },
        },
        "2022": {
          total: 67,
          statusBreakdown: {
            lulus: 55,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 7,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 27,
            female: 40,
          },
          graduationYears: {
            "3": 3,
          },
        },
        "2023": {
          total: 86,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 69,
            cuti: 0,
            other: 5,
          },
          genderBreakdown: {
            male: 33,
            female: 53,
          },
          graduationYears: {},
        },
        "2024": {
          total: 85,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 81,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 23,
            female: 62,
          },
          graduationYears: {},
        },
      },
    },
    "281": {
      prodiCode: "281",
      prodiName: "Unknown Prodi",
      total: 2,
      statusBreakdown: {
        lulus: 2,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 2,
        female: 0,
      },
      byBatch: {
        "2000": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 0,
          },
          graduationYears: {},
        },
      },
    },
    "287": {
      prodiCode: "287",
      prodiName: "Teknologi Nano",
      total: 71,
      statusBreakdown: {
        lulus: 36,
        undurDiri: 1,
        dikeluarkan: 0,
        aktif: 30,
        cuti: 0,
        other: 4,
      },
      genderBreakdown: {
        male: 32,
        female: 39,
      },
      byBatch: {
        "2020": {
          total: 14,
          statusBreakdown: {
            lulus: 13,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 9,
            female: 5,
          },
          graduationYears: {
            "3": 5,
          },
        },
        "2021": {
          total: 15,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 10,
            female: 5,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2022": {
          total: 14,
          statusBreakdown: {
            lulus: 10,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 6,
            female: 8,
          },
          graduationYears: {},
        },
        "2023": {
          total: 13,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 11,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 3,
            female: 10,
          },
          graduationYears: {},
        },
        "2024": {
          total: 15,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 15,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 11,
          },
          graduationYears: {},
        },
      },
    },
    "288": {
      prodiCode: "288",
      prodiName: "Perencanaan Kepariwisataan",
      total: 121,
      statusBreakdown: {
        lulus: 82,
        undurDiri: 5,
        dikeluarkan: 1,
        aktif: 32,
        cuti: 0,
        other: 1,
      },
      genderBreakdown: {
        male: 40,
        female: 81,
      },
      byBatch: {
        "2019": {
          total: 12,
          statusBreakdown: {
            lulus: 11,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 8,
          },
          graduationYears: {
            "3": 5,
          },
        },
        "2020": {
          total: 15,
          statusBreakdown: {
            lulus: 11,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 6,
            female: 9,
          },
          graduationYears: {
            "3": 6,
          },
        },
        "2021": {
          total: 30,
          statusBreakdown: {
            lulus: 29,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 10,
            female: 20,
          },
          graduationYears: {
            "3": 1,
            "4": 1,
          },
        },
        "2022": {
          total: 20,
          statusBreakdown: {
            lulus: 19,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 14,
          },
          graduationYears: {
            "3": 2,
          },
        },
        "2023": {
          total: 29,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 17,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 11,
            female: 18,
          },
          graduationYears: {},
        },
        "2024": {
          total: 15,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 15,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 12,
          },
          graduationYears: {},
        },
      },
    },
    "289": {
      prodiCode: "289",
      prodiName: "Arsitektur Lanskap",
      total: 106,
      statusBreakdown: {
        lulus: 85,
        undurDiri: 5,
        dikeluarkan: 0,
        aktif: 14,
        cuti: 0,
        other: 2,
      },
      genderBreakdown: {
        male: 40,
        female: 66,
      },
      byBatch: {
        "2015": {
          total: 6,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 3,
          },
          graduationYears: {
            "3": 5,
          },
        },
        "2016": {
          total: 7,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 7,
          },
          graduationYears: {
            "3": 5,
          },
        },
        "2017": {
          total: 7,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 4,
          },
          graduationYears: {
            "3": 4,
            "4": 1,
          },
        },
        "2018": {
          total: 5,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 3,
          },
          graduationYears: {
            "3": 5,
          },
        },
        "2019": {
          total: 13,
          statusBreakdown: {
            lulus: 13,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 9,
          },
          graduationYears: {
            "3": 8,
            "4": 1,
          },
        },
        "2020": {
          total: 19,
          statusBreakdown: {
            lulus: 18,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 8,
            female: 11,
          },
          graduationYears: {
            "3": 14,
          },
        },
        "2021": {
          total: 18,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 11,
          },
          graduationYears: {
            "3": 2,
          },
        },
        "2022": {
          total: 13,
          statusBreakdown: {
            lulus: 13,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 9,
          },
          graduationYears: {},
        },
        "2023": {
          total: 12,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 9,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 5,
          },
          graduationYears: {},
        },
        "2024": {
          total: 6,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 5,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 2,
            female: 4,
          },
          graduationYears: {},
        },
      },
    },
    "290": {
      prodiCode: "290",
      prodiName: "Sains Manajemen",
      total: 318,
      statusBreakdown: {
        lulus: 231,
        undurDiri: 27,
        dikeluarkan: 2,
        aktif: 38,
        cuti: 0,
        other: 20,
      },
      genderBreakdown: {
        male: 129,
        female: 189,
      },
      byBatch: {
        "2013": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2015": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2016": {
          total: 28,
          statusBreakdown: {
            lulus: 27,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 10,
            female: 18,
          },
          graduationYears: {
            "3": 9,
            "4": 2,
            "5": 1,
          },
        },
        "2017": {
          total: 4,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 2,
          },
          graduationYears: {
            "3": 2,
            "4": 1,
          },
        },
        "2018": {
          total: 28,
          statusBreakdown: {
            lulus: 25,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 14,
            female: 14,
          },
          graduationYears: {
            "3": 15,
            "4": 2,
          },
        },
        "2019": {
          total: 32,
          statusBreakdown: {
            lulus: 28,
            undurDiri: 3,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 10,
            female: 22,
          },
          graduationYears: {
            "3": 8,
            "4": 4,
          },
        },
        "2020": {
          total: 72,
          statusBreakdown: {
            lulus: 60,
            undurDiri: 10,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 35,
            female: 37,
          },
          graduationYears: {
            "3": 19,
            "4": 3,
          },
        },
        "2021": {
          total: 58,
          statusBreakdown: {
            lulus: 46,
            undurDiri: 8,
            dikeluarkan: 1,
            aktif: 2,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 23,
            female: 35,
          },
          graduationYears: {
            "3": 9,
            "4": 1,
          },
        },
        "2022": {
          total: 36,
          statusBreakdown: {
            lulus: 22,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 5,
            cuti: 0,
            other: 8,
          },
          genderBreakdown: {
            male: 13,
            female: 23,
          },
          graduationYears: {
            "3": 7,
          },
        },
        "2023": {
          total: 29,
          statusBreakdown: {
            lulus: 17,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 6,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 12,
            female: 17,
          },
          graduationYears: {},
        },
        "2024": {
          total: 28,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 25,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 8,
            female: 20,
          },
          graduationYears: {},
        },
      },
    },
    "291": {
      prodiCode: "291",
      prodiName: "Administrasi Bisnis",
      total: 4834,
      statusBreakdown: {
        lulus: 4037,
        undurDiri: 144,
        dikeluarkan: 42,
        aktif: 469,
        cuti: 0,
        other: 142,
      },
      genderBreakdown: {
        male: 2996,
        female: 1838,
      },
      byBatch: {
        "2008": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2013": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {
            "3": 1,
            "4": 1,
          },
        },
        "2014": {
          total: 103,
          statusBreakdown: {
            lulus: 98,
            undurDiri: 1,
            dikeluarkan: 4,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 68,
            female: 35,
          },
          graduationYears: {
            "3": 72,
            "4": 26,
          },
        },
        "2015": {
          total: 405,
          statusBreakdown: {
            lulus: 389,
            undurDiri: 10,
            dikeluarkan: 6,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 276,
            female: 129,
          },
          graduationYears: {
            "3": 203,
            "4": 58,
            "5": 4,
          },
        },
        "2016": {
          total: 507,
          statusBreakdown: {
            lulus: 486,
            undurDiri: 16,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 311,
            female: 196,
          },
          graduationYears: {
            "3": 124,
            "4": 41,
            "5": 5,
          },
        },
        "2017": {
          total: 143,
          statusBreakdown: {
            lulus: 126,
            undurDiri: 15,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 105,
            female: 38,
          },
          graduationYears: {
            "3": 106,
            "4": 19,
          },
        },
        "2018": {
          total: 524,
          statusBreakdown: {
            lulus: 494,
            undurDiri: 29,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 343,
            female: 181,
          },
          graduationYears: {
            "3": 195,
            "4": 22,
            "5": 2,
          },
        },
        "2019": {
          total: 607,
          statusBreakdown: {
            lulus: 578,
            undurDiri: 15,
            dikeluarkan: 14,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 376,
            female: 231,
          },
          graduationYears: {
            "3": 179,
            "4": 63,
          },
        },
        "2020": {
          total: 634,
          statusBreakdown: {
            lulus: 583,
            undurDiri: 22,
            dikeluarkan: 6,
            aktif: 0,
            cuti: 0,
            other: 23,
          },
          genderBreakdown: {
            male: 422,
            female: 212,
          },
          graduationYears: {
            "3": 143,
            "4": 45,
          },
        },
        "2021": {
          total: 583,
          statusBreakdown: {
            lulus: 499,
            undurDiri: 29,
            dikeluarkan: 6,
            aktif: 7,
            cuti: 0,
            other: 42,
          },
          genderBreakdown: {
            male: 352,
            female: 231,
          },
          graduationYears: {
            "3": 36,
            "4": 25,
          },
        },
        "2022": {
          total: 458,
          statusBreakdown: {
            lulus: 413,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 10,
            cuti: 0,
            other: 34,
          },
          genderBreakdown: {
            male: 284,
            female: 174,
          },
          graduationYears: {
            "3": 21,
          },
        },
        "2023": {
          total: 508,
          statusBreakdown: {
            lulus: 368,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 109,
            cuti: 0,
            other: 27,
          },
          genderBreakdown: {
            male: 317,
            female: 191,
          },
          graduationYears: {},
        },
        "2024": {
          total: 359,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 343,
            cuti: 0,
            other: 14,
          },
          genderBreakdown: {
            male: 140,
            female: 219,
          },
          graduationYears: {},
        },
      },
    },
    "293": {
      prodiCode: "293",
      prodiName: "Administrasi Bisnis (Kampus Jakarta)",
      total: 3470,
      statusBreakdown: {
        lulus: 2628,
        undurDiri: 99,
        dikeluarkan: 29,
        aktif: 579,
        cuti: 0,
        other: 135,
      },
      genderBreakdown: {
        male: 1937,
        female: 1533,
      },
      byBatch: {
        "2016": {
          total: 292,
          statusBreakdown: {
            lulus: 273,
            undurDiri: 17,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 192,
            female: 100,
          },
          graduationYears: {
            "3": 77,
            "4": 18,
            "5": 3,
          },
        },
        "2017": {
          total: 116,
          statusBreakdown: {
            lulus: 94,
            undurDiri: 21,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 79,
            female: 37,
          },
          graduationYears: {
            "3": 65,
            "4": 27,
            "5": 1,
          },
        },
        "2018": {
          total: 338,
          statusBreakdown: {
            lulus: 313,
            undurDiri: 21,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 191,
            female: 147,
          },
          graduationYears: {
            "3": 57,
            "4": 22,
          },
        },
        "2019": {
          total: 403,
          statusBreakdown: {
            lulus: 380,
            undurDiri: 13,
            dikeluarkan: 10,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 242,
            female: 161,
          },
          graduationYears: {
            "3": 59,
            "4": 13,
          },
        },
        "2020": {
          total: 487,
          statusBreakdown: {
            lulus: 442,
            undurDiri: 13,
            dikeluarkan: 9,
            aktif: 0,
            cuti: 0,
            other: 23,
          },
          genderBreakdown: {
            male: 278,
            female: 209,
          },
          graduationYears: {
            "3": 65,
            "4": 24,
          },
        },
        "2021": {
          total: 492,
          statusBreakdown: {
            lulus: 427,
            undurDiri: 5,
            dikeluarkan: 4,
            aktif: 10,
            cuti: 0,
            other: 46,
          },
          genderBreakdown: {
            male: 297,
            female: 195,
          },
          graduationYears: {
            "3": 64,
            "4": 16,
          },
        },
        "2022": {
          total: 402,
          statusBreakdown: {
            lulus: 340,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 25,
            cuti: 0,
            other: 33,
          },
          genderBreakdown: {
            male: 243,
            female: 159,
          },
          graduationYears: {
            "3": 30,
          },
        },
        "2023": {
          total: 485,
          statusBreakdown: {
            lulus: 359,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 93,
            cuti: 0,
            other: 29,
          },
          genderBreakdown: {
            male: 307,
            female: 178,
          },
          graduationYears: {},
        },
        "2024": {
          total: 455,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 451,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 108,
            female: 347,
          },
          graduationYears: {},
        },
      },
    },
    "294": {
      prodiCode: "294",
      prodiName: "Logistik",
      total: 59,
      statusBreakdown: {
        lulus: 11,
        undurDiri: 1,
        dikeluarkan: 1,
        aktif: 44,
        cuti: 0,
        other: 2,
      },
      genderBreakdown: {
        male: 41,
        female: 18,
      },
      byBatch: {
        "2021": {
          total: 8,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 6,
            female: 2,
          },
          graduationYears: {
            "3": 2,
          },
        },
        "2022": {
          total: 8,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 3,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2023": {
          total: 34,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 33,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 25,
            female: 9,
          },
          graduationYears: {},
        },
        "2024": {
          total: 9,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 9,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 4,
          },
          graduationYears: {},
        },
      },
    },
    "301": {
      prodiCode: "301",
      prodiName: "Matematika",
      total: 151,
      statusBreakdown: {
        lulus: 90,
        undurDiri: 7,
        dikeluarkan: 2,
        aktif: 45,
        cuti: 0,
        other: 7,
      },
      genderBreakdown: {
        male: 66,
        female: 85,
      },
      byBatch: {
        "2007": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "5": 1,
          },
        },
        "2011": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "5": 1,
          },
        },
        "2012": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "6": 1,
          },
        },
        "2013": {
          total: 6,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 1,
          },
          graduationYears: {
            "4": 1,
            "5": 2,
            "6": 2,
            "8": 1,
          },
        },
        "2014": {
          total: 13,
          statusBreakdown: {
            lulus: 13,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 10,
          },
          graduationYears: {
            "4": 3,
            "5": 3,
            "6": 4,
            "7": 3,
          },
        },
        "2015": {
          total: 8,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 3,
          },
          graduationYears: {
            "3": 3,
            "4": 2,
            "6": 2,
            "7": 1,
          },
        },
        "2016": {
          total: 19,
          statusBreakdown: {
            lulus: 17,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 11,
            female: 8,
          },
          graduationYears: {
            "4": 3,
            "5": 5,
            "6": 4,
            "7": 5,
          },
        },
        "2017": {
          total: 14,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 9,
          },
          graduationYears: {
            "3": 1,
            "4": 1,
            "5": 4,
            "6": 4,
            "7": 2,
          },
        },
        "2018": {
          total: 7,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 3,
          },
          graduationYears: {
            "3": 1,
            "4": 1,
            "5": 2,
            "6": 2,
            "7": 1,
          },
        },
        "2019": {
          total: 17,
          statusBreakdown: {
            lulus: 15,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 6,
            female: 11,
          },
          graduationYears: {
            "4": 5,
            "5": 7,
            "6": 3,
          },
        },
        "2020": {
          total: 14,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 5,
            female: 9,
          },
          graduationYears: {
            "3": 1,
            "4": 2,
            "5": 3,
          },
        },
        "2021": {
          total: 17,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 13,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 10,
            female: 7,
          },
          graduationYears: {
            "3": 1,
            "4": 1,
          },
        },
        "2022": {
          total: 10,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 9,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 3,
            female: 7,
          },
          graduationYears: {},
        },
        "2023": {
          total: 11,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 10,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 5,
            female: 6,
          },
          graduationYears: {},
        },
        "2024": {
          total: 12,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 11,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 2,
            female: 10,
          },
          graduationYears: {},
        },
      },
    },
    "302": {
      prodiCode: "302",
      prodiName: "Fisika",
      total: 181,
      statusBreakdown: {
        lulus: 106,
        undurDiri: 3,
        dikeluarkan: 0,
        aktif: 61,
        cuti: 0,
        other: 11,
      },
      genderBreakdown: {
        male: 96,
        female: 85,
      },
      byBatch: {
        "2012": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 1,
          },
          graduationYears: {
            "5": 1,
            "6": 2,
          },
        },
        "2013": {
          total: 4,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 3,
          },
          graduationYears: {
            "6": 2,
            "7": 1,
            "8": 1,
          },
        },
        "2014": {
          total: 14,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 12,
            female: 2,
          },
          graduationYears: {
            "3": 3,
            "4": 2,
            "5": 6,
            "6": 2,
            "7": 1,
          },
        },
        "2015": {
          total: 13,
          statusBreakdown: {
            lulus: 13,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 9,
          },
          graduationYears: {
            "4": 2,
            "5": 7,
            "6": 3,
            "7": 1,
          },
        },
        "2016": {
          total: 20,
          statusBreakdown: {
            lulus: 19,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 9,
            female: 11,
          },
          graduationYears: {
            "3": 2,
            "4": 4,
            "5": 3,
            "6": 3,
            "7": 7,
          },
        },
        "2017": {
          total: 18,
          statusBreakdown: {
            lulus: 17,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 7,
            female: 11,
          },
          graduationYears: {
            "3": 1,
            "4": 2,
            "5": 4,
            "6": 3,
            "7": 7,
          },
        },
        "2018": {
          total: 7,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 2,
          },
          graduationYears: {
            "4": 2,
            "5": 4,
            "6": 1,
          },
        },
        "2019": {
          total: 13,
          statusBreakdown: {
            lulus: 10,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 9,
            female: 4,
          },
          graduationYears: {
            "4": 3,
            "5": 3,
            "6": 4,
          },
        },
        "2020": {
          total: 23,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 6,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 17,
            female: 6,
          },
          graduationYears: {
            "3": 7,
            "4": 5,
            "5": 2,
          },
        },
        "2021": {
          total: 21,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 13,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 13,
            female: 8,
          },
          graduationYears: {
            "3": 2,
            "4": 2,
          },
        },
        "2022": {
          total: 14,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 12,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 9,
            female: 5,
          },
          graduationYears: {},
        },
        "2023": {
          total: 18,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 16,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 5,
            female: 13,
          },
          graduationYears: {},
        },
        "2024": {
          total: 13,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 13,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 10,
          },
          graduationYears: {},
        },
      },
    },
    "303": {
      prodiCode: "303",
      prodiName: "Astronomi",
      total: 14,
      statusBreakdown: {
        lulus: 4,
        undurDiri: 2,
        dikeluarkan: 0,
        aktif: 7,
        cuti: 0,
        other: 1,
      },
      genderBreakdown: {
        male: 7,
        female: 7,
      },
      byBatch: {
        "2012": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "5": 1,
          },
        },
        "2014": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2015": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2019": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2020": {
          total: 4,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 2,
          },
          graduationYears: {
            "4": 2,
          },
        },
        "2022": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2023": {
          total: 3,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 2,
          },
          graduationYears: {},
        },
        "2024": {
          total: 2,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {},
        },
      },
    },
    "305": {
      prodiCode: "305",
      prodiName: "Kimia",
      total: 128,
      statusBreakdown: {
        lulus: 66,
        undurDiri: 5,
        dikeluarkan: 1,
        aktif: 51,
        cuti: 0,
        other: 5,
      },
      genderBreakdown: {
        male: 46,
        female: 82,
      },
      byBatch: {
        "2007": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2013": {
          total: 4,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 4,
          },
          graduationYears: {
            "4": 1,
            "5": 2,
            "6": 1,
          },
        },
        "2014": {
          total: 9,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 6,
          },
          graduationYears: {
            "5": 5,
            "6": 3,
            "7": 1,
          },
        },
        "2015": {
          total: 17,
          statusBreakdown: {
            lulus: 15,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 9,
            female: 8,
          },
          graduationYears: {
            "4": 3,
            "6": 7,
            "7": 3,
          },
        },
        "2016": {
          total: 14,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 12,
          },
          graduationYears: {
            "7": 12,
          },
        },
        "2017": {
          total: 4,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 1,
          },
          graduationYears: {
            "3": 1,
            "4": 1,
          },
        },
        "2018": {
          total: 7,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 5,
          },
          graduationYears: {
            "4": 3,
            "5": 2,
            "7": 2,
          },
        },
        "2019": {
          total: 10,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 8,
          },
          graduationYears: {
            "3": 1,
            "4": 2,
            "5": 5,
            "6": 1,
          },
        },
        "2020": {
          total: 11,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 1,
            female: 10,
          },
          graduationYears: {
            "4": 4,
            "5": 1,
          },
        },
        "2021": {
          total: 17,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 15,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 9,
            female: 8,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2022": {
          total: 13,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 12,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 6,
            female: 7,
          },
          graduationYears: {},
        },
        "2023": {
          total: 10,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 10,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 5,
          },
          graduationYears: {},
        },
        "2024": {
          total: 11,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 11,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 8,
          },
          graduationYears: {},
        },
      },
    },
    "306": {
      prodiCode: "306",
      prodiName: "Biologi",
      total: 103,
      statusBreakdown: {
        lulus: 39,
        undurDiri: 7,
        dikeluarkan: 0,
        aktif: 52,
        cuti: 0,
        other: 5,
      },
      genderBreakdown: {
        male: 24,
        female: 79,
      },
      byBatch: {
        "2012": {
          total: 9,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 7,
          },
          graduationYears: {
            "6": 6,
            "7": 3,
          },
        },
        "2013": {
          total: 5,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 4,
          },
          graduationYears: {
            "5": 1,
            "6": 1,
            "7": 3,
          },
        },
        "2014": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "5": 1,
          },
        },
        "2015": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 3,
          },
          graduationYears: {
            "6": 1,
            "7": 2,
          },
        },
        "2016": {
          total: 8,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 6,
          },
          graduationYears: {
            "6": 6,
            "7": 1,
          },
        },
        "2017": {
          total: 5,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 5,
          },
          graduationYears: {
            "5": 3,
            "6": 1,
          },
        },
        "2018": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 2,
          },
          graduationYears: {
            "5": 1,
            "7": 1,
          },
        },
        "2019": {
          total: 8,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 3,
            female: 5,
          },
          graduationYears: {
            "4": 1,
            "6": 2,
          },
        },
        "2020": {
          total: 19,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 10,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 4,
            female: 15,
          },
          graduationYears: {
            "4": 3,
            "5": 2,
          },
        },
        "2021": {
          total: 11,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 8,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 5,
            female: 6,
          },
          graduationYears: {},
        },
        "2022": {
          total: 7,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 7,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 5,
          },
          graduationYears: {},
        },
        "2023": {
          total: 13,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 13,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 9,
          },
          graduationYears: {},
        },
        "2024": {
          total: 12,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 12,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 11,
          },
          graduationYears: {},
        },
      },
    },
    "307": {
      prodiCode: "307",
      prodiName: "Farmasi",
      total: 220,
      statusBreakdown: {
        lulus: 127,
        undurDiri: 4,
        dikeluarkan: 0,
        aktif: 83,
        cuti: 0,
        other: 6,
      },
      genderBreakdown: {
        male: 68,
        female: 152,
      },
      byBatch: {
        "2009": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "5": 1,
          },
        },
        "2012": {
          total: 5,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 3,
          },
          graduationYears: {
            "5": 2,
            "6": 3,
          },
        },
        "2013": {
          total: 7,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 6,
          },
          graduationYears: {
            "4": 1,
            "5": 4,
            "6": 1,
            "7": 1,
          },
        },
        "2014": {
          total: 8,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 5,
          },
          graduationYears: {
            "4": 1,
            "5": 4,
            "6": 1,
            "7": 2,
          },
        },
        "2015": {
          total: 13,
          statusBreakdown: {
            lulus: 13,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 6,
          },
          graduationYears: {
            "3": 4,
            "4": 2,
            "5": 3,
            "6": 3,
          },
        },
        "2016": {
          total: 24,
          statusBreakdown: {
            lulus: 24,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 19,
          },
          graduationYears: {
            "4": 7,
            "5": 10,
            "6": 3,
            "7": 4,
          },
        },
        "2017": {
          total: 8,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 6,
          },
          graduationYears: {
            "3": 1,
            "4": 4,
            "5": 1,
            "6": 1,
            "7": 1,
          },
        },
        "2018": {
          total: 12,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 7,
          },
          graduationYears: {
            "4": 6,
            "5": 5,
            "6": 1,
          },
        },
        "2019": {
          total: 14,
          statusBreakdown: {
            lulus: 10,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 4,
            female: 10,
          },
          graduationYears: {
            "3": 3,
            "4": 7,
          },
        },
        "2020": {
          total: 23,
          statusBreakdown: {
            lulus: 19,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 8,
            female: 15,
          },
          graduationYears: {
            "3": 8,
            "4": 10,
            "5": 1,
          },
        },
        "2021": {
          total: 42,
          statusBreakdown: {
            lulus: 19,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 19,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 12,
            female: 30,
          },
          graduationYears: {
            "3": 8,
            "4": 11,
          },
        },
        "2022": {
          total: 26,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 24,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 8,
            female: 18,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2023": {
          total: 18,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 17,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 5,
            female: 13,
          },
          graduationYears: {},
        },
        "2024": {
          total: 19,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 19,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 14,
          },
          graduationYears: {},
        },
      },
    },
    "320": {
      prodiCode: "320",
      prodiName: "Teknik Geologi",
      total: 46,
      statusBreakdown: {
        lulus: 22,
        undurDiri: 0,
        dikeluarkan: 2,
        aktif: 20,
        cuti: 0,
        other: 2,
      },
      genderBreakdown: {
        male: 39,
        female: 7,
      },
      byBatch: {
        "2013": {
          total: 5,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 0,
          },
          graduationYears: {
            "6": 4,
          },
        },
        "2014": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {
            "5": 1,
            "6": 1,
          },
        },
        "2015": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "7": 1,
          },
        },
        "2016": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 0,
          },
          graduationYears: {
            "5": 1,
            "7": 1,
          },
        },
        "2017": {
          total: 3,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 0,
          },
          graduationYears: {
            "6": 1,
            "7": 1,
          },
        },
        "2018": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 1,
          },
          graduationYears: {
            "6": 2,
            "7": 1,
          },
        },
        "2019": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 0,
          },
          graduationYears: {
            "5": 1,
            "6": 2,
          },
        },
        "2020": {
          total: 11,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 6,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 9,
            female: 2,
          },
          graduationYears: {
            "4": 3,
            "5": 1,
          },
        },
        "2021": {
          total: 4,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 0,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2022": {
          total: 2,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 0,
          },
          graduationYears: {},
        },
        "2023": {
          total: 7,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 7,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 2,
          },
          graduationYears: {},
        },
        "2024": {
          total: 3,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 2,
            female: 1,
          },
          graduationYears: {},
        },
      },
    },
    "321": {
      prodiCode: "321",
      prodiName: "Rekayasa Pertambangan",
      total: 48,
      statusBreakdown: {
        lulus: 13,
        undurDiri: 1,
        dikeluarkan: 0,
        aktif: 31,
        cuti: 0,
        other: 3,
      },
      genderBreakdown: {
        male: 28,
        female: 20,
      },
      byBatch: {
        "2013": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 0,
          },
          graduationYears: {
            "5": 1,
            "6": 1,
          },
        },
        "2015": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {
            "4": 1,
            "6": 1,
          },
        },
        "2016": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "5": 1,
          },
        },
        "2017": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "5": 1,
          },
        },
        "2018": {
          total: 3,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 2,
            female: 1,
          },
          graduationYears: {
            "6": 1,
            "7": 1,
          },
        },
        "2019": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 0,
          },
          graduationYears: {
            "3": 2,
          },
        },
        "2020": {
          total: 9,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 4,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 6,
            female: 3,
          },
          graduationYears: {
            "4": 3,
          },
        },
        "2021": {
          total: 4,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 4,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 0,
          },
          graduationYears: {},
        },
        "2022": {
          total: 3,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 1,
          },
          graduationYears: {},
        },
        "2023": {
          total: 12,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 11,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 5,
            female: 7,
          },
          graduationYears: {},
        },
        "2024": {
          total: 9,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 9,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 7,
          },
          graduationYears: {},
        },
      },
    },
    "322": {
      prodiCode: "322",
      prodiName: "Teknik Perminyakan",
      total: 48,
      statusBreakdown: {
        lulus: 17,
        undurDiri: 4,
        dikeluarkan: 0,
        aktif: 19,
        cuti: 0,
        other: 8,
      },
      genderBreakdown: {
        male: 27,
        female: 21,
      },
      byBatch: {
        "2011": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "6": 1,
          },
        },
        "2012": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "8": 1,
          },
        },
        "2015": {
          total: 7,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 3,
          },
          graduationYears: {
            "5": 2,
            "6": 1,
            "7": 3,
          },
        },
        "2016": {
          total: 3,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 2,
            female: 1,
          },
          graduationYears: {
            "7": 1,
          },
        },
        "2017": {
          total: 6,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 3,
          },
          graduationYears: {
            "5": 3,
            "7": 2,
          },
        },
        "2018": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "7": 1,
          },
        },
        "2019": {
          total: 5,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 3,
          },
          graduationYears: {
            "4": 1,
            "5": 1,
          },
        },
        "2021": {
          total: 4,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 3,
            female: 1,
          },
          graduationYears: {},
        },
        "2022": {
          total: 3,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 2,
          },
          graduationYears: {},
        },
        "2023": {
          total: 15,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 9,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 7,
            female: 8,
          },
          graduationYears: {},
        },
        "2024": {
          total: 2,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 0,
          },
          graduationYears: {},
        },
      },
    },
    "323": {
      prodiCode: "323",
      prodiName: "Teknik Geofisika",
      total: 70,
      statusBreakdown: {
        lulus: 36,
        undurDiri: 5,
        dikeluarkan: 3,
        aktif: 24,
        cuti: 0,
        other: 2,
      },
      genderBreakdown: {
        male: 47,
        female: 23,
      },
      byBatch: {
        "2012": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2013": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 0,
          },
          graduationYears: {
            "5": 1,
            "6": 1,
          },
        },
        "2014": {
          total: 5,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 2,
          },
          graduationYears: {
            "3": 2,
            "4": 1,
            "7": 2,
          },
        },
        "2015": {
          total: 3,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 2,
          },
          graduationYears: {
            "3": 1,
            "7": 1,
          },
        },
        "2016": {
          total: 4,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 2,
          },
          graduationYears: {
            "3": 1,
            "4": 1,
            "7": 1,
          },
        },
        "2017": {
          total: 4,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 0,
          },
          graduationYears: {
            "3": 1,
            "6": 1,
            "7": 1,
          },
        },
        "2018": {
          total: 11,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 9,
            female: 2,
          },
          graduationYears: {
            "4": 3,
            "5": 3,
            "7": 2,
          },
        },
        "2019": {
          total: 6,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 3,
          },
          graduationYears: {
            "4": 2,
            "5": 1,
            "6": 3,
          },
        },
        "2020": {
          total: 11,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 4,
          },
          graduationYears: {
            "4": 4,
            "5": 2,
          },
        },
        "2021": {
          total: 5,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 4,
            female: 1,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2022": {
          total: 4,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 4,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 1,
          },
          graduationYears: {},
        },
        "2023": {
          total: 10,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 10,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 9,
            female: 1,
          },
          graduationYears: {},
        },
        "2024": {
          total: 4,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 4,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 4,
          },
          graduationYears: {},
        },
      },
    },
    "324": {
      prodiCode: "324",
      prodiName: "Sains Kebumian",
      total: 52,
      statusBreakdown: {
        lulus: 11,
        undurDiri: 1,
        dikeluarkan: 0,
        aktif: 37,
        cuti: 0,
        other: 3,
      },
      genderBreakdown: {
        male: 32,
        female: 20,
      },
      byBatch: {
        "2012": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "7": 1,
          },
        },
        "2013": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "5": 1,
          },
        },
        "2014": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "5": 1,
          },
        },
        "2015": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {
            "4": 1,
            "5": 1,
          },
        },
        "2016": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2017": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "5": 1,
          },
        },
        "2018": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "5": 1,
          },
        },
        "2019": {
          total: 2,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2020": {
          total: 7,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 3,
            female: 4,
          },
          graduationYears: {
            "3": 1,
            "4": 2,
          },
        },
        "2021": {
          total: 3,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 1,
          },
          graduationYears: {},
        },
        "2022": {
          total: 7,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 7,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 2,
          },
          graduationYears: {},
        },
        "2023": {
          total: 13,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 13,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 5,
          },
          graduationYears: {},
        },
        "2024": {
          total: 12,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 12,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 4,
          },
          graduationYears: {},
        },
      },
    },
    "330": {
      prodiCode: "330",
      prodiName: "Teknik Kimia",
      total: 85,
      statusBreakdown: {
        lulus: 34,
        undurDiri: 7,
        dikeluarkan: 0,
        aktif: 37,
        cuti: 0,
        other: 7,
      },
      genderBreakdown: {
        male: 33,
        female: 52,
      },
      byBatch: {
        "2013": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 1,
          },
          graduationYears: {
            "5": 2,
            "6": 1,
          },
        },
        "2014": {
          total: 5,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 2,
          },
          graduationYears: {
            "4": 2,
            "5": 2,
          },
        },
        "2015": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 1,
          },
          graduationYears: {
            "6": 2,
            "7": 1,
          },
        },
        "2016": {
          total: 5,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 4,
          },
          graduationYears: {
            "4": 1,
            "6": 2,
            "7": 1,
          },
        },
        "2017": {
          total: 5,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 4,
          },
          graduationYears: {
            "3": 1,
            "5": 2,
            "6": 2,
          },
        },
        "2018": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 1,
          },
          graduationYears: {
            "4": 1,
            "6": 1,
            "7": 1,
          },
        },
        "2019": {
          total: 9,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 4,
          },
          graduationYears: {
            "3": 2,
            "4": 2,
            "5": 2,
            "6": 2,
          },
        },
        "2020": {
          total: 3,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 2,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2021": {
          total: 14,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 7,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 7,
            female: 7,
          },
          graduationYears: {
            "3": 1,
            "4": 2,
          },
        },
        "2022": {
          total: 7,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 5,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 3,
            female: 4,
          },
          graduationYears: {},
        },
        "2023": {
          total: 17,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 13,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 5,
            female: 12,
          },
          graduationYears: {},
        },
        "2024": {
          total: 11,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 10,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 1,
            female: 10,
          },
          graduationYears: {},
        },
      },
    },
    "331": {
      prodiCode: "331",
      prodiName: "Teknik Mesin",
      total: 64,
      statusBreakdown: {
        lulus: 18,
        undurDiri: 8,
        dikeluarkan: 5,
        aktif: 27,
        cuti: 0,
        other: 6,
      },
      genderBreakdown: {
        male: 49,
        female: 15,
      },
      byBatch: {
        "2012": {
          total: 2,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {
            "5": 1,
          },
        },
        "2013": {
          total: 4,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 1,
          },
          graduationYears: {
            "6": 1,
            "8": 1,
          },
        },
        "2014": {
          total: 6,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 5,
            female: 1,
          },
          graduationYears: {
            "7": 5,
          },
        },
        "2015": {
          total: 5,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 0,
          },
          graduationYears: {
            "5": 2,
            "7": 2,
          },
        },
        "2016": {
          total: 7,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 1,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 5,
            female: 2,
          },
          graduationYears: {
            "6": 1,
            "7": 2,
          },
        },
        "2017": {
          total: 2,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 0,
          },
          graduationYears: {},
        },
        "2019": {
          total: 3,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 3,
            female: 0,
          },
          graduationYears: {
            "4": 1,
            "6": 1,
          },
        },
        "2020": {
          total: 8,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 4,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 6,
            female: 2,
          },
          graduationYears: {
            "5": 1,
          },
        },
        "2021": {
          total: 9,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 6,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 8,
            female: 1,
          },
          graduationYears: {},
        },
        "2022": {
          total: 7,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 6,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 0,
          },
          graduationYears: {},
        },
        "2023": {
          total: 6,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 6,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 3,
          },
          graduationYears: {},
        },
        "2024": {
          total: 5,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 5,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 4,
          },
          graduationYears: {},
        },
      },
    },
    "332": {
      prodiCode: "332",
      prodiName: "Teknik Elektro dan Informatika",
      total: 377,
      statusBreakdown: {
        lulus: 153,
        undurDiri: 16,
        dikeluarkan: 14,
        aktif: 171,
        cuti: 0,
        other: 23,
      },
      genderBreakdown: {
        male: 255,
        female: 122,
      },
      byBatch: {
        "1997": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2012": {
          total: 7,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 2,
          },
          graduationYears: {
            "5": 1,
            "6": 1,
            "7": 3,
          },
        },
        "2013": {
          total: 19,
          statusBreakdown: {
            lulus: 17,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 12,
            female: 7,
          },
          graduationYears: {
            "5": 3,
            "6": 7,
            "7": 3,
            "8": 4,
          },
        },
        "2014": {
          total: 23,
          statusBreakdown: {
            lulus: 21,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 17,
            female: 6,
          },
          graduationYears: {
            "4": 1,
            "5": 6,
            "6": 4,
            "7": 8,
            "8": 2,
          },
        },
        "2015": {
          total: 18,
          statusBreakdown: {
            lulus: 16,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 14,
            female: 4,
          },
          graduationYears: {
            "3": 1,
            "4": 1,
            "5": 3,
            "6": 4,
            "7": 7,
          },
        },
        "2016": {
          total: 39,
          statusBreakdown: {
            lulus: 27,
            undurDiri: 3,
            dikeluarkan: 8,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 28,
            female: 11,
          },
          graduationYears: {
            "4": 2,
            "5": 2,
            "6": 6,
            "7": 17,
          },
        },
        "2017": {
          total: 16,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 1,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 12,
            female: 4,
          },
          graduationYears: {
            "4": 3,
            "5": 2,
            "6": 1,
            "7": 6,
          },
        },
        "2018": {
          total: 31,
          statusBreakdown: {
            lulus: 22,
            undurDiri: 2,
            dikeluarkan: 1,
            aktif: 4,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 23,
            female: 8,
          },
          graduationYears: {
            "4": 1,
            "5": 12,
            "6": 3,
            "7": 6,
          },
        },
        "2019": {
          total: 22,
          statusBreakdown: {
            lulus: 16,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 4,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 14,
            female: 8,
          },
          graduationYears: {
            "4": 4,
            "5": 6,
            "6": 6,
          },
        },
        "2020": {
          total: 47,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 27,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 29,
            female: 18,
          },
          graduationYears: {
            "4": 7,
            "5": 5,
          },
        },
        "2021": {
          total: 58,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 46,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 37,
            female: 21,
          },
          graduationYears: {
            "3": 3,
            "4": 2,
          },
        },
        "2022": {
          total: 50,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 47,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 34,
            female: 16,
          },
          graduationYears: {},
        },
        "2023": {
          total: 28,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 26,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 22,
            female: 6,
          },
          graduationYears: {},
        },
        "2024": {
          total: 18,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 17,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 7,
            female: 11,
          },
          graduationYears: {},
        },
      },
    },
    "333": {
      prodiCode: "333",
      prodiName: "Teknik Fisika",
      total: 91,
      statusBreakdown: {
        lulus: 40,
        undurDiri: 4,
        dikeluarkan: 1,
        aktif: 39,
        cuti: 0,
        other: 7,
      },
      genderBreakdown: {
        male: 55,
        female: 36,
      },
      byBatch: {
        "2013": {
          total: 4,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 0,
          },
          graduationYears: {
            "5": 1,
            "6": 3,
          },
        },
        "2014": {
          total: 6,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 4,
            female: 2,
          },
          graduationYears: {
            "4": 2,
            "5": 1,
            "6": 1,
            "7": 1,
          },
        },
        "2015": {
          total: 3,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 0,
          },
          graduationYears: {
            "4": 1,
            "7": 1,
          },
        },
        "2016": {
          total: 7,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 3,
          },
          graduationYears: {
            "4": 2,
            "5": 1,
            "6": 2,
          },
        },
        "2017": {
          total: 6,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 2,
          },
          graduationYears: {
            "4": 1,
            "5": 1,
            "6": 2,
            "7": 1,
          },
        },
        "2018": {
          total: 6,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 3,
          },
          graduationYears: {
            "5": 1,
            "6": 3,
            "7": 1,
          },
        },
        "2019": {
          total: 10,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 6,
            female: 4,
          },
          graduationYears: {
            "4": 3,
            "5": 3,
            "6": 1,
          },
        },
        "2020": {
          total: 13,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 4,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 8,
            female: 5,
          },
          graduationYears: {
            "3": 2,
            "4": 2,
            "5": 2,
          },
        },
        "2021": {
          total: 8,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 6,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 5,
            female: 3,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2022": {
          total: 9,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 9,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 5,
          },
          graduationYears: {},
        },
        "2023": {
          total: 11,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 9,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 6,
            female: 5,
          },
          graduationYears: {},
        },
        "2024": {
          total: 8,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 8,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 4,
          },
          graduationYears: {},
        },
      },
    },
    "334": {
      prodiCode: "334",
      prodiName: "Teknik dan Manajemen Industri",
      total: 91,
      statusBreakdown: {
        lulus: 45,
        undurDiri: 5,
        dikeluarkan: 1,
        aktif: 38,
        cuti: 0,
        other: 2,
      },
      genderBreakdown: {
        male: 38,
        female: 53,
      },
      byBatch: {
        "2012": {
          total: 2,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {
            "6": 1,
          },
        },
        "2013": {
          total: 6,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 5,
          },
          graduationYears: {
            "5": 3,
            "6": 2,
            "7": 1,
          },
        },
        "2014": {
          total: 5,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 3,
          },
          graduationYears: {
            "6": 1,
            "7": 4,
          },
        },
        "2015": {
          total: 8,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 5,
          },
          graduationYears: {
            "6": 4,
            "7": 4,
          },
        },
        "2016": {
          total: 6,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 3,
          },
          graduationYears: {
            "5": 1,
            "6": 1,
            "7": 3,
          },
        },
        "2017": {
          total: 6,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 3,
          },
          graduationYears: {
            "6": 4,
            "7": 2,
          },
        },
        "2018": {
          total: 5,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 2,
          },
          graduationYears: {
            "5": 1,
            "6": 3,
            "7": 1,
          },
        },
        "2019": {
          total: 5,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 4,
          },
          graduationYears: {
            "5": 2,
            "6": 1,
          },
        },
        "2020": {
          total: 15,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 9,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 8,
          },
          graduationYears: {
            "3": 1,
            "4": 3,
            "5": 1,
          },
        },
        "2021": {
          total: 7,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 5,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 5,
            female: 2,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2022": {
          total: 9,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 7,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 4,
            female: 5,
          },
          graduationYears: {},
        },
        "2023": {
          total: 8,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 8,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 5,
          },
          graduationYears: {},
        },
        "2024": {
          total: 9,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 9,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 7,
          },
          graduationYears: {},
        },
      },
    },
    "336": {
      prodiCode: "336",
      prodiName: "Aeronotika dan Astronotika",
      total: 38,
      statusBreakdown: {
        lulus: 13,
        undurDiri: 4,
        dikeluarkan: 3,
        aktif: 16,
        cuti: 0,
        other: 2,
      },
      genderBreakdown: {
        male: 37,
        female: 1,
      },
      byBatch: {
        "2012": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "5": 1,
          },
        },
        "2013": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2015": {
          total: 3,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 0,
          },
          graduationYears: {
            "6": 1,
            "7": 1,
          },
        },
        "2016": {
          total: 6,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 0,
          },
          graduationYears: {
            "4": 1,
            "5": 1,
            "6": 1,
            "7": 1,
          },
        },
        "2017": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {
            "7": 2,
          },
        },
        "2018": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2019": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2020": {
          total: 7,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 7,
            female: 0,
          },
          graduationYears: {
            "4": 2,
            "5": 1,
          },
        },
        "2021": {
          total: 8,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 7,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 0,
          },
          graduationYears: {},
        },
        "2022": {
          total: 4,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 4,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 0,
          },
          graduationYears: {},
        },
        "2023": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2024": {
          total: 3,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 0,
          },
          graduationYears: {},
        },
      },
    },
    "337": {
      prodiCode: "337",
      prodiName: "Ilmu dan Teknik Material",
      total: 27,
      statusBreakdown: {
        lulus: 4,
        undurDiri: 5,
        dikeluarkan: 0,
        aktif: 15,
        cuti: 0,
        other: 3,
      },
      genderBreakdown: {
        male: 16,
        female: 11,
      },
      byBatch: {
        "2013": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "5": 1,
          },
        },
        "2015": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2016": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "5": 1,
          },
        },
        "2018": {
          total: 2,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {},
        },
        "2019": {
          total: 2,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2020": {
          total: 4,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 2,
          },
          graduationYears: {
            "5": 1,
          },
        },
        "2021": {
          total: 2,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {},
        },
        "2022": {
          total: 5,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 5,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 1,
          },
          graduationYears: {},
        },
        "2023": {
          total: 6,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 6,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 3,
          },
          graduationYears: {},
        },
        "2024": {
          total: 3,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 1,
          },
          graduationYears: {},
        },
      },
    },
    "342": {
      prodiCode: "342",
      prodiName: "Transportasi",
      total: 33,
      statusBreakdown: {
        lulus: 19,
        undurDiri: 1,
        dikeluarkan: 1,
        aktif: 10,
        cuti: 0,
        other: 2,
      },
      genderBreakdown: {
        male: 21,
        female: 12,
      },
      byBatch: {
        "2012": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "8": 1,
          },
        },
        "2013": {
          total: 4,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 2,
          },
          graduationYears: {
            "6": 1,
            "7": 3,
          },
        },
        "2014": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 0,
          },
          graduationYears: {
            "6": 2,
            "7": 1,
          },
        },
        "2015": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2016": {
          total: 4,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 1,
          },
          graduationYears: {
            "4": 1,
            "7": 3,
          },
        },
        "2017": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2018": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "6": 1,
          },
        },
        "2019": {
          total: 4,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 2,
            female: 2,
          },
          graduationYears: {
            "3": 1,
            "4": 2,
          },
        },
        "2020": {
          total: 2,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {},
        },
        "2021": {
          total: 3,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 0,
          },
          graduationYears: {
            "3": 1,
            "4": 1,
          },
        },
        "2022": {
          total: 3,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 2,
          },
          graduationYears: {},
        },
        "2024": {
          total: 6,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 6,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 3,
          },
          graduationYears: {},
        },
      },
    },
    "349": {
      prodiCode: "349",
      prodiName: "Rekayasa Nuklir",
      total: 13,
      statusBreakdown: {
        lulus: 5,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 8,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 6,
        female: 7,
      },
      byBatch: {
        "2020": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 0,
          },
          graduationYears: {
            "4": 2,
          },
        },
        "2021": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 2,
          },
          graduationYears: {
            "3": 2,
          },
        },
        "2022": {
          total: 4,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 2,
          },
          graduationYears: {},
        },
        "2023": {
          total: 3,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 1,
          },
          graduationYears: {},
        },
        "2024": {
          total: 2,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 2,
          },
          graduationYears: {},
        },
      },
    },
    "350": {
      prodiCode: "350",
      prodiName: "Teknik Sipil",
      total: 135,
      statusBreakdown: {
        lulus: 68,
        undurDiri: 14,
        dikeluarkan: 0,
        aktif: 52,
        cuti: 0,
        other: 1,
      },
      genderBreakdown: {
        male: 86,
        female: 49,
      },
      byBatch: {
        "2004": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2011": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {
            "6": 1,
          },
        },
        "2013": {
          total: 5,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 1,
          },
          graduationYears: {
            "5": 1,
            "6": 1,
            "7": 3,
          },
        },
        "2014": {
          total: 13,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 6,
          },
          graduationYears: {
            "6": 3,
            "7": 5,
            "8": 1,
          },
        },
        "2015": {
          total: 5,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 1,
          },
          graduationYears: {
            "7": 5,
          },
        },
        "2016": {
          total: 10,
          statusBreakdown: {
            lulus: 10,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 6,
          },
          graduationYears: {
            "4": 2,
            "5": 1,
            "6": 3,
            "7": 4,
          },
        },
        "2017": {
          total: 6,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 2,
          },
          graduationYears: {
            "4": 1,
            "5": 1,
            "6": 1,
            "7": 1,
          },
        },
        "2018": {
          total: 12,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 7,
          },
          graduationYears: {
            "5": 3,
            "6": 5,
            "7": 4,
          },
        },
        "2019": {
          total: 17,
          statusBreakdown: {
            lulus: 11,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 4,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 10,
            female: 7,
          },
          graduationYears: {
            "4": 3,
            "5": 7,
            "6": 1,
          },
        },
        "2020": {
          total: 18,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 11,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 15,
            female: 3,
          },
          graduationYears: {
            "4": 4,
            "5": 1,
          },
        },
        "2021": {
          total: 23,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 16,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 15,
            female: 8,
          },
          graduationYears: {
            "3": 1,
            "4": 4,
          },
        },
        "2022": {
          total: 4,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 4,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 2,
          },
          graduationYears: {},
        },
        "2023": {
          total: 10,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 8,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 3,
          },
          graduationYears: {},
        },
        "2024": {
          total: 10,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 9,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 7,
            female: 3,
          },
          graduationYears: {},
        },
      },
    },
    "351": {
      prodiCode: "351",
      prodiName: "Teknik Geodesi dan Geomatika",
      total: 65,
      statusBreakdown: {
        lulus: 30,
        undurDiri: 6,
        dikeluarkan: 1,
        aktif: 16,
        cuti: 0,
        other: 12,
      },
      genderBreakdown: {
        male: 37,
        female: 28,
      },
      byBatch: {
        "2013": {
          total: 3,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 2,
          },
          graduationYears: {
            "8": 1,
          },
        },
        "2014": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {
            "7": 2,
          },
        },
        "2015": {
          total: 2,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2016": {
          total: 3,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 1,
          },
          graduationYears: {
            "5": 1,
            "7": 1,
          },
        },
        "2018": {
          total: 3,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 1,
            female: 2,
          },
          graduationYears: {
            "5": 2,
          },
        },
        "2019": {
          total: 9,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 6,
            female: 3,
          },
          graduationYears: {
            "4": 2,
            "5": 4,
          },
        },
        "2020": {
          total: 16,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 6,
          },
          genderBreakdown: {
            male: 11,
            female: 5,
          },
          graduationYears: {
            "3": 1,
            "4": 5,
          },
        },
        "2021": {
          total: 9,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 5,
            female: 4,
          },
          graduationYears: {
            "3": 4,
            "4": 1,
          },
        },
        "2022": {
          total: 9,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 4,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 2,
          },
          graduationYears: {
            "3": 4,
          },
        },
        "2023": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2024": {
          total: 8,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 7,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 1,
            female: 7,
          },
          graduationYears: {},
        },
      },
    },
    "352": {
      prodiCode: "352",
      prodiName: "Arsitektur",
      total: 97,
      statusBreakdown: {
        lulus: 41,
        undurDiri: 6,
        dikeluarkan: 2,
        aktif: 38,
        cuti: 0,
        other: 10,
      },
      genderBreakdown: {
        male: 44,
        female: 53,
      },
      byBatch: {
        "2012": {
          total: 6,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 3,
          },
          graduationYears: {
            "5": 1,
            "7": 3,
          },
        },
        "2013": {
          total: 6,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 3,
          },
          graduationYears: {
            "4": 1,
            "5": 1,
            "7": 3,
            "8": 1,
          },
        },
        "2014": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 2,
          },
          graduationYears: {
            "7": 2,
          },
        },
        "2015": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 2,
          },
          graduationYears: {
            "4": 1,
            "7": 2,
          },
        },
        "2016": {
          total: 7,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 4,
          },
          graduationYears: {
            "5": 1,
            "6": 2,
            "7": 2,
          },
        },
        "2017": {
          total: 6,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 3,
          },
          graduationYears: {
            "4": 1,
            "7": 5,
          },
        },
        "2018": {
          total: 4,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 3,
          },
          graduationYears: {
            "5": 1,
            "6": 1,
            "7": 2,
          },
        },
        "2019": {
          total: 7,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 1,
            female: 6,
          },
          graduationYears: {
            "4": 1,
            "5": 1,
            "6": 1,
          },
        },
        "2020": {
          total: 4,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 2,
          },
          graduationYears: {
            "4": 1,
            "5": 1,
          },
        },
        "2021": {
          total: 18,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 8,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 10,
            female: 8,
          },
          graduationYears: {
            "4": 6,
          },
        },
        "2022": {
          total: 10,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 9,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 4,
            female: 6,
          },
          graduationYears: {},
        },
        "2023": {
          total: 13,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 9,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 9,
            female: 4,
          },
          graduationYears: {},
        },
        "2024": {
          total: 11,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 9,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 4,
            female: 7,
          },
          graduationYears: {},
        },
      },
    },
    "353": {
      prodiCode: "353",
      prodiName: "Teknik Lingkungan",
      total: 83,
      statusBreakdown: {
        lulus: 35,
        undurDiri: 1,
        dikeluarkan: 3,
        aktif: 37,
        cuti: 0,
        other: 7,
      },
      genderBreakdown: {
        male: 31,
        female: 52,
      },
      byBatch: {
        "2012": {
          total: 4,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 3,
          },
          graduationYears: {
            "5": 2,
            "6": 2,
          },
        },
        "2013": {
          total: 4,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 2,
          },
          graduationYears: {
            "6": 3,
          },
        },
        "2014": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 2,
          },
          graduationYears: {
            "4": 2,
          },
        },
        "2015": {
          total: 8,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 6,
          },
          graduationYears: {
            "4": 2,
            "5": 2,
            "6": 1,
            "7": 3,
          },
        },
        "2016": {
          total: 7,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 2,
          },
          graduationYears: {
            "3": 1,
            "6": 2,
            "7": 2,
          },
        },
        "2017": {
          total: 7,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 3,
          },
          graduationYears: {
            "4": 1,
            "5": 2,
            "6": 3,
            "7": 1,
          },
        },
        "2019": {
          total: 4,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 3,
          },
          graduationYears: {
            "3": 1,
            "4": 2,
          },
        },
        "2020": {
          total: 8,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 4,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 3,
            female: 5,
          },
          graduationYears: {
            "4": 2,
          },
        },
        "2021": {
          total: 16,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 14,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 5,
            female: 11,
          },
          graduationYears: {},
        },
        "2022": {
          total: 10,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 8,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 4,
            female: 6,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2023": {
          total: 6,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 3,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 2,
            female: 4,
          },
          graduationYears: {},
        },
        "2024": {
          total: 7,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 7,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 5,
          },
          graduationYears: {},
        },
      },
    },
    "354": {
      prodiCode: "354",
      prodiName: "Perencanaan Wilayah dan Kota",
      total: 86,
      statusBreakdown: {
        lulus: 37,
        undurDiri: 5,
        dikeluarkan: 0,
        aktif: 41,
        cuti: 0,
        other: 3,
      },
      genderBreakdown: {
        male: 40,
        female: 46,
      },
      byBatch: {
        "2013": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "8": 1,
          },
        },
        "2014": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 2,
          },
          graduationYears: {
            "7": 2,
          },
        },
        "2015": {
          total: 6,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 3,
          },
          graduationYears: {
            "4": 1,
            "5": 2,
            "7": 3,
          },
        },
        "2016": {
          total: 5,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 3,
          },
          graduationYears: {
            "5": 2,
            "6": 3,
          },
        },
        "2017": {
          total: 8,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 5,
            female: 3,
          },
          graduationYears: {
            "4": 2,
            "5": 1,
            "6": 1,
            "7": 1,
          },
        },
        "2018": {
          total: 5,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 3,
          },
          graduationYears: {
            "4": 2,
            "5": 2,
            "6": 1,
          },
        },
        "2019": {
          total: 6,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 2,
            female: 4,
          },
          graduationYears: {
            "4": 1,
            "5": 4,
          },
        },
        "2020": {
          total: 7,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 5,
            female: 2,
          },
          graduationYears: {
            "4": 2,
            "5": 1,
          },
        },
        "2021": {
          total: 13,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 7,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 6,
          },
          graduationYears: {
            "3": 2,
            "4": 2,
          },
        },
        "2022": {
          total: 10,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 9,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 8,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2023": {
          total: 9,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 9,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 3,
          },
          graduationYears: {},
        },
        "2024": {
          total: 14,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 14,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 8,
          },
          graduationYears: {},
        },
      },
    },
    "370": {
      prodiCode: "370",
      prodiName: "Ilmu Seni Rupa dan Desain",
      total: 141,
      statusBreakdown: {
        lulus: 70,
        undurDiri: 4,
        dikeluarkan: 1,
        aktif: 59,
        cuti: 0,
        other: 7,
      },
      genderBreakdown: {
        male: 71,
        female: 70,
      },
      byBatch: {
        "2010": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2014": {
          total: 7,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 2,
          },
          graduationYears: {
            "4": 7,
          },
        },
        "2015": {
          total: 10,
          statusBreakdown: {
            lulus: 10,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 7,
          },
          graduationYears: {
            "3": 1,
            "4": 5,
            "5": 3,
            "6": 1,
          },
        },
        "2016": {
          total: 10,
          statusBreakdown: {
            lulus: 10,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 4,
          },
          graduationYears: {
            "4": 2,
            "5": 7,
            "7": 1,
          },
        },
        "2017": {
          total: 8,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 5,
          },
          graduationYears: {
            "3": 1,
            "4": 6,
            "5": 1,
          },
        },
        "2018": {
          total: 12,
          statusBreakdown: {
            lulus: 10,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 6,
            female: 6,
          },
          graduationYears: {
            "4": 6,
            "5": 1,
            "6": 2,
            "7": 1,
          },
        },
        "2019": {
          total: 11,
          statusBreakdown: {
            lulus: 10,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 8,
          },
          graduationYears: {
            "4": 4,
            "5": 5,
            "6": 1,
          },
        },
        "2020": {
          total: 16,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 4,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 9,
            female: 7,
          },
          graduationYears: {
            "4": 7,
            "5": 2,
          },
        },
        "2021": {
          total: 16,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 9,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 13,
            female: 3,
          },
          graduationYears: {
            "3": 3,
            "4": 3,
          },
        },
        "2022": {
          total: 17,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 15,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 7,
            female: 10,
          },
          graduationYears: {},
        },
        "2023": {
          total: 17,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 16,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 8,
            female: 9,
          },
          graduationYears: {},
        },
        "2024": {
          total: 16,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 15,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 7,
            female: 9,
          },
          graduationYears: {},
        },
      },
    },
    "387": {
      prodiCode: "387",
      prodiName: "Sains dan Teknologi Nano",
      total: 14,
      statusBreakdown: {
        lulus: 3,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 5,
        cuti: 0,
        other: 6,
      },
      genderBreakdown: {
        male: 8,
        female: 6,
      },
      byBatch: {
        "2020": {
          total: 5,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 3,
            female: 2,
          },
          graduationYears: {
            "4": 2,
          },
        },
        "2021": {
          total: 5,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 0,
            other: 2,
          },
          genderBreakdown: {
            male: 4,
            female: 1,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2022": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2023": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2024": {
          total: 2,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 2,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {},
        },
      },
    },
    "390": {
      prodiCode: "390",
      prodiName: "Sains Manajemen",
      total: 263,
      statusBreakdown: {
        lulus: 99,
        undurDiri: 19,
        dikeluarkan: 3,
        aktif: 108,
        cuti: 0,
        other: 34,
      },
      genderBreakdown: {
        male: 155,
        female: 108,
      },
      byBatch: {
        "2012": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 2,
          },
          graduationYears: {
            "5": 2,
            "6": 1,
          },
        },
        "2013": {
          total: 4,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 2,
          },
          graduationYears: {
            "4": 2,
            "6": 1,
          },
        },
        "2014": {
          total: 6,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 2,
          },
          graduationYears: {
            "4": 1,
            "5": 1,
            "6": 2,
            "7": 1,
          },
        },
        "2015": {
          total: 4,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 1,
          },
          graduationYears: {
            "5": 1,
            "7": 1,
          },
        },
        "2016": {
          total: 15,
          statusBreakdown: {
            lulus: 13,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 8,
          },
          graduationYears: {
            "3": 2,
            "4": 6,
            "5": 3,
            "6": 2,
          },
        },
        "2017": {
          total: 17,
          statusBreakdown: {
            lulus: 11,
            undurDiri: 5,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 10,
          },
          graduationYears: {
            "3": 1,
            "4": 3,
            "5": 4,
            "7": 3,
          },
        },
        "2018": {
          total: 15,
          statusBreakdown: {
            lulus: 10,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 3,
          },
          genderBreakdown: {
            male: 7,
            female: 8,
          },
          graduationYears: {
            "3": 2,
            "4": 2,
            "5": 2,
            "6": 3,
            "7": 1,
          },
        },
        "2019": {
          total: 20,
          statusBreakdown: {
            lulus: 19,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 10,
            female: 10,
          },
          graduationYears: {
            "4": 13,
            "5": 4,
            "6": 2,
          },
        },
        "2020": {
          total: 27,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 4,
            dikeluarkan: 0,
            aktif: 6,
            cuti: 0,
            other: 8,
          },
          genderBreakdown: {
            male: 20,
            female: 7,
          },
          graduationYears: {
            "3": 1,
            "4": 3,
            "5": 5,
          },
        },
        "2021": {
          total: 47,
          statusBreakdown: {
            lulus: 19,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 8,
            cuti: 0,
            other: 19,
          },
          genderBreakdown: {
            male: 30,
            female: 17,
          },
          graduationYears: {
            "3": 5,
            "4": 13,
          },
        },
        "2022": {
          total: 32,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 22,
            cuti: 0,
            other: 4,
          },
          genderBreakdown: {
            male: 21,
            female: 11,
          },
          graduationYears: {
            "3": 5,
          },
        },
        "2023": {
          total: 27,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 26,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 14,
            female: 13,
          },
          graduationYears: {},
        },
        "2024": {
          total: 46,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 46,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 29,
            female: 17,
          },
          graduationYears: {},
        },
      },
    },
    "432": {
      prodiCode: "432",
      prodiName: "Unknown Prodi",
      total: 1,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 1,
      },
      genderBreakdown: {
        male: 0,
        female: 1,
      },
      byBatch: {
        "1958": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
      },
    },
    "442": {
      prodiCode: "442",
      prodiName: "Unknown Prodi",
      total: 1,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 1,
      },
      genderBreakdown: {
        male: 0,
        female: 1,
      },
      byBatch: {
        "2000": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
      },
    },
    "544": {
      prodiCode: "544",
      prodiName: "Unknown Prodi",
      total: 1,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 1,
      },
      genderBreakdown: {
        male: 0,
        female: 1,
      },
      byBatch: {
        "2019": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
      },
    },
    "642": {
      prodiCode: "642",
      prodiName: "Unknown Prodi",
      total: 1,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 1,
      },
      genderBreakdown: {
        male: 0,
        female: 1,
      },
      byBatch: {
        "2000": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
      },
    },
    "800": {
      prodiCode: "800",
      prodiName: "Unknown Prodi",
      total: 228,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 228,
      },
      genderBreakdown: {
        male: 7,
        female: 221,
      },
      byBatch: {
        "2022": {
          total: 16,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 16,
          },
          genderBreakdown: {
            male: 7,
            female: 9,
          },
          graduationYears: {},
        },
        "2023": {
          total: 212,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 212,
          },
          genderBreakdown: {
            male: 0,
            female: 212,
          },
          graduationYears: {},
        },
      },
    },
    "901": {
      prodiCode: "901",
      prodiName: "Pengajaran Matematika",
      total: 41,
      statusBreakdown: {
        lulus: 41,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 20,
        female: 21,
      },
      byBatch: {
        "2009": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2015": {
          total: 8,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 3,
          },
          graduationYears: {},
        },
        "2016": {
          total: 8,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 1,
          },
          graduationYears: {
            "3": 3,
          },
        },
        "2017": {
          total: 5,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 2,
          },
          graduationYears: {
            "3": 2,
          },
        },
        "2018": {
          total: 19,
          statusBreakdown: {
            lulus: 19,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 14,
          },
          graduationYears: {
            "3": 7,
          },
        },
      },
    },
    "902": {
      prodiCode: "902",
      prodiName: "Pengajaran Fisika",
      total: 48,
      statusBreakdown: {
        lulus: 44,
        undurDiri: 2,
        dikeluarkan: 2,
        aktif: 0,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 18,
        female: 30,
      },
      byBatch: {
        "2015": {
          total: 9,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 6,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2016": {
          total: 14,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 8,
          },
          graduationYears: {
            "3": 5,
          },
        },
        "2017": {
          total: 10,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 1,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 6,
          },
          graduationYears: {
            "3": 5,
          },
        },
        "2018": {
          total: 15,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 10,
          },
          graduationYears: {
            "3": 8,
            "4": 1,
          },
        },
      },
    },
    "905": {
      prodiCode: "905",
      prodiName: "Pengajaran Kimia",
      total: 22,
      statusBreakdown: {
        lulus: 22,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 4,
        female: 18,
      },
      byBatch: {
        "2009": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2015": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 3,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2016": {
          total: 11,
          statusBreakdown: {
            lulus: 11,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 11,
          },
          graduationYears: {
            "3": 2,
            "4": 2,
          },
        },
        "2017": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2018": {
          total: 6,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 3,
          },
          graduationYears: {
            "3": 5,
          },
        },
      },
    },
    "907": {
      prodiCode: "907",
      prodiName: "Profesi Apoteker",
      total: 1077,
      statusBreakdown: {
        lulus: 873,
        undurDiri: 4,
        dikeluarkan: 0,
        aktif: 200,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 150,
        female: 927,
      },
      byBatch: {
        "2014": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2018": {
          total: 69,
          statusBreakdown: {
            lulus: 69,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 11,
            female: 58,
          },
          graduationYears: {},
        },
        "2019": {
          total: 157,
          statusBreakdown: {
            lulus: 157,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 30,
            female: 127,
          },
          graduationYears: {},
        },
        "2020": {
          total: 137,
          statusBreakdown: {
            lulus: 135,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 21,
            female: 116,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2021": {
          total: 153,
          statusBreakdown: {
            lulus: 151,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 15,
            female: 138,
          },
          graduationYears: {
            "3": 1,
          },
        },
        "2022": {
          total: 168,
          statusBreakdown: {
            lulus: 168,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 30,
            female: 138,
          },
          graduationYears: {},
        },
        "2023": {
          total: 192,
          statusBreakdown: {
            lulus: 192,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 32,
            female: 160,
          },
          graduationYears: {},
        },
        "2024": {
          total: 200,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 200,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 11,
            female: 189,
          },
          graduationYears: {},
        },
      },
    },
    "914": {
      prodiCode: "914",
      prodiName: "Unknown Prodi",
      total: 17,
      statusBreakdown: {
        lulus: 17,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 12,
        female: 5,
      },
      byBatch: {
        "2019": {
          total: 12,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 9,
            female: 3,
          },
          graduationYears: {},
        },
        "2022": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 0,
          },
          graduationYears: {},
        },
        "2023": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2024": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 2,
          },
          graduationYears: {},
        },
      },
    },
    "915": {
      prodiCode: "915",
      prodiName: "Unknown Prodi",
      total: 17,
      statusBreakdown: {
        lulus: 16,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 1,
      },
      genderBreakdown: {
        male: 9,
        female: 8,
      },
      byBatch: {
        "2019": {
          total: 16,
          statusBreakdown: {
            lulus: 15,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 8,
            female: 8,
          },
          graduationYears: {},
        },
        "2020": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
      },
    },
    "920": {
      prodiCode: "920",
      prodiName: "Unknown Prodi",
      total: 120,
      statusBreakdown: {
        lulus: 119,
        undurDiri: 1,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 100,
        female: 20,
      },
      byBatch: {
        "2019": {
          total: 26,
          statusBreakdown: {
            lulus: 26,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 22,
            female: 4,
          },
          graduationYears: {},
        },
        "2020": {
          total: 26,
          statusBreakdown: {
            lulus: 26,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 19,
            female: 7,
          },
          graduationYears: {},
        },
        "2021": {
          total: 22,
          statusBreakdown: {
            lulus: 21,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 19,
            female: 3,
          },
          graduationYears: {},
        },
        "2022": {
          total: 20,
          statusBreakdown: {
            lulus: 20,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 16,
            female: 4,
          },
          graduationYears: {},
        },
        "2023": {
          total: 14,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 14,
            female: 0,
          },
          graduationYears: {},
        },
        "2024": {
          total: 12,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 10,
            female: 2,
          },
          graduationYears: {},
        },
      },
    },
    "921": {
      prodiCode: "921",
      prodiName: "Unknown Prodi",
      total: 273,
      statusBreakdown: {
        lulus: 270,
        undurDiri: 3,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 220,
        female: 53,
      },
      byBatch: {
        "2017": {
          total: 4,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 0,
          },
          graduationYears: {
            "3": 3,
          },
        },
        "2018": {
          total: 8,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 0,
          },
          graduationYears: {
            "3": 2,
          },
        },
        "2019": {
          total: 16,
          statusBreakdown: {
            lulus: 16,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 15,
            female: 1,
          },
          graduationYears: {},
        },
        "2020": {
          total: 12,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 12,
            female: 0,
          },
          graduationYears: {},
        },
        "2021": {
          total: 21,
          statusBreakdown: {
            lulus: 20,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 19,
            female: 2,
          },
          graduationYears: {},
        },
        "2022": {
          total: 61,
          statusBreakdown: {
            lulus: 61,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 56,
            female: 5,
          },
          graduationYears: {},
        },
        "2023": {
          total: 67,
          statusBreakdown: {
            lulus: 67,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 64,
            female: 3,
          },
          graduationYears: {},
        },
        "2024": {
          total: 84,
          statusBreakdown: {
            lulus: 84,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 42,
            female: 42,
          },
          graduationYears: {},
        },
      },
    },
    "922": {
      prodiCode: "922",
      prodiName: "Unknown Prodi",
      total: 173,
      statusBreakdown: {
        lulus: 172,
        undurDiri: 1,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 151,
        female: 22,
      },
      byBatch: {
        "2019": {
          total: 9,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 1,
          },
          graduationYears: {},
        },
        "2020": {
          total: 62,
          statusBreakdown: {
            lulus: 62,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 54,
            female: 8,
          },
          graduationYears: {},
        },
        "2021": {
          total: 36,
          statusBreakdown: {
            lulus: 36,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 35,
            female: 1,
          },
          graduationYears: {},
        },
        "2022": {
          total: 34,
          statusBreakdown: {
            lulus: 33,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 27,
            female: 7,
          },
          graduationYears: {},
        },
        "2023": {
          total: 25,
          statusBreakdown: {
            lulus: 25,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 20,
            female: 5,
          },
          graduationYears: {},
        },
        "2024": {
          total: 7,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 0,
          },
          graduationYears: {},
        },
      },
    },
    "923": {
      prodiCode: "923",
      prodiName: "Unknown Prodi",
      total: 57,
      statusBreakdown: {
        lulus: 57,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 50,
        female: 7,
      },
      byBatch: {
        "2019": {
          total: 10,
          statusBreakdown: {
            lulus: 10,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 9,
            female: 1,
          },
          graduationYears: {},
        },
        "2020": {
          total: 19,
          statusBreakdown: {
            lulus: 19,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 19,
            female: 0,
          },
          graduationYears: {},
        },
        "2021": {
          total: 13,
          statusBreakdown: {
            lulus: 13,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 9,
            female: 4,
          },
          graduationYears: {},
        },
        "2022": {
          total: 8,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 1,
          },
          graduationYears: {},
        },
        "2023": {
          total: 7,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 1,
          },
          graduationYears: {},
        },
      },
    },
    "925": {
      prodiCode: "925",
      prodiName: "Unknown Prodi",
      total: 41,
      statusBreakdown: {
        lulus: 41,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 25,
        female: 16,
      },
      byBatch: {
        "2020": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 0,
          },
          graduationYears: {},
        },
        "2021": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 0,
          },
          graduationYears: {},
        },
        "2022": {
          total: 6,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 1,
          },
          graduationYears: {},
        },
        "2023": {
          total: 6,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 1,
          },
          graduationYears: {},
        },
        "2024": {
          total: 23,
          statusBreakdown: {
            lulus: 23,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 9,
            female: 14,
          },
          graduationYears: {},
        },
      },
    },
    "930": {
      prodiCode: "930",
      prodiName: "Unknown Prodi",
      total: 192,
      statusBreakdown: {
        lulus: 190,
        undurDiri: 0,
        dikeluarkan: 2,
        aktif: 0,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 150,
        female: 42,
      },
      byBatch: {
        "2019": {
          total: 30,
          statusBreakdown: {
            lulus: 30,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 20,
            female: 10,
          },
          graduationYears: {},
        },
        "2020": {
          total: 37,
          statusBreakdown: {
            lulus: 37,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 31,
            female: 6,
          },
          graduationYears: {},
        },
        "2021": {
          total: 38,
          statusBreakdown: {
            lulus: 37,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 32,
            female: 6,
          },
          graduationYears: {},
        },
        "2022": {
          total: 47,
          statusBreakdown: {
            lulus: 46,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 37,
            female: 10,
          },
          graduationYears: {},
        },
        "2023": {
          total: 25,
          statusBreakdown: {
            lulus: 25,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 19,
            female: 6,
          },
          graduationYears: {},
        },
        "2024": {
          total: 15,
          statusBreakdown: {
            lulus: 15,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 11,
            female: 4,
          },
          graduationYears: {},
        },
      },
    },
    "931": {
      prodiCode: "931",
      prodiName: "Unknown Prodi",
      total: 292,
      statusBreakdown: {
        lulus: 288,
        undurDiri: 2,
        dikeluarkan: 1,
        aktif: 1,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 261,
        female: 31,
      },
      byBatch: {
        "2019": {
          total: 28,
          statusBreakdown: {
            lulus: 28,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 27,
            female: 1,
          },
          graduationYears: {},
        },
        "2020": {
          total: 38,
          statusBreakdown: {
            lulus: 38,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 37,
            female: 1,
          },
          graduationYears: {},
        },
        "2021": {
          total: 64,
          statusBreakdown: {
            lulus: 62,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 63,
            female: 1,
          },
          graduationYears: {},
        },
        "2022": {
          total: 63,
          statusBreakdown: {
            lulus: 62,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 62,
            female: 1,
          },
          graduationYears: {},
        },
        "2023": {
          total: 42,
          statusBreakdown: {
            lulus: 42,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 42,
            female: 0,
          },
          graduationYears: {},
        },
        "2024": {
          total: 57,
          statusBreakdown: {
            lulus: 56,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 30,
            female: 27,
          },
          graduationYears: {},
        },
      },
    },
    "932": {
      prodiCode: "932",
      prodiName: "Unknown Prodi",
      total: 275,
      statusBreakdown: {
        lulus: 273,
        undurDiri: 1,
        dikeluarkan: 1,
        aktif: 0,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 233,
        female: 42,
      },
      byBatch: {
        "2019": {
          total: 18,
          statusBreakdown: {
            lulus: 16,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 17,
            female: 1,
          },
          graduationYears: {},
        },
        "2020": {
          total: 59,
          statusBreakdown: {
            lulus: 59,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 57,
            female: 2,
          },
          graduationYears: {},
        },
        "2021": {
          total: 48,
          statusBreakdown: {
            lulus: 48,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 46,
            female: 2,
          },
          graduationYears: {},
        },
        "2022": {
          total: 43,
          statusBreakdown: {
            lulus: 43,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 38,
            female: 5,
          },
          graduationYears: {},
        },
        "2023": {
          total: 35,
          statusBreakdown: {
            lulus: 35,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 34,
            female: 1,
          },
          graduationYears: {},
        },
        "2024": {
          total: 72,
          statusBreakdown: {
            lulus: 72,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 41,
            female: 31,
          },
          graduationYears: {},
        },
      },
    },
    "933": {
      prodiCode: "933",
      prodiName: "Unknown Prodi",
      total: 68,
      statusBreakdown: {
        lulus: 67,
        undurDiri: 1,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 58,
        female: 10,
      },
      byBatch: {
        "2019": {
          total: 23,
          statusBreakdown: {
            lulus: 23,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 20,
            female: 3,
          },
          graduationYears: {},
        },
        "2020": {
          total: 12,
          statusBreakdown: {
            lulus: 11,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 12,
            female: 0,
          },
          graduationYears: {},
        },
        "2021": {
          total: 8,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 0,
          },
          graduationYears: {},
        },
        "2022": {
          total: 12,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 10,
            female: 2,
          },
          graduationYears: {},
        },
        "2023": {
          total: 5,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 0,
          },
          graduationYears: {},
        },
        "2024": {
          total: 8,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 5,
          },
          graduationYears: {},
        },
      },
    },
    "934": {
      prodiCode: "934",
      prodiName: "Unknown Prodi",
      total: 69,
      statusBreakdown: {
        lulus: 65,
        undurDiri: 3,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 1,
      },
      genderBreakdown: {
        male: 52,
        female: 17,
      },
      byBatch: {
        "2019": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 1,
          },
          graduationYears: {},
        },
        "2020": {
          total: 6,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 1,
          },
          graduationYears: {},
        },
        "2021": {
          total: 14,
          statusBreakdown: {
            lulus: 12,
            undurDiri: 2,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 14,
            female: 0,
          },
          graduationYears: {},
        },
        "2022": {
          total: 17,
          statusBreakdown: {
            lulus: 17,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 12,
            female: 5,
          },
          graduationYears: {},
        },
        "2023": {
          total: 14,
          statusBreakdown: {
            lulus: 13,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 14,
            female: 0,
          },
          graduationYears: {},
        },
        "2024": {
          total: 16,
          statusBreakdown: {
            lulus: 16,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 10,
          },
          graduationYears: {},
        },
      },
    },
    "935": {
      prodiCode: "935",
      prodiName: "Unknown Prodi",
      total: 2,
      statusBreakdown: {
        lulus: 2,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 0,
        female: 2,
      },
      byBatch: {
        "2024": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 2,
          },
          graduationYears: {},
        },
      },
    },
    "936": {
      prodiCode: "936",
      prodiName: "Unknown Prodi",
      total: 26,
      statusBreakdown: {
        lulus: 25,
        undurDiri: 1,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 24,
        female: 2,
      },
      byBatch: {
        "2019": {
          total: 14,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 13,
            female: 1,
          },
          graduationYears: {},
        },
        "2020": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2021": {
          total: 4,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 0,
          },
          graduationYears: {},
        },
        "2022": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 0,
          },
          graduationYears: {},
        },
        "2023": {
          total: 5,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 1,
          },
          graduationYears: {},
        },
      },
    },
    "937": {
      prodiCode: "937",
      prodiName: "Unknown Prodi",
      total: 34,
      statusBreakdown: {
        lulus: 33,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 1,
      },
      genderBreakdown: {
        male: 27,
        female: 7,
      },
      byBatch: {
        "2020": {
          total: 5,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 1,
          },
          graduationYears: {},
        },
        "2021": {
          total: 7,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 4,
            female: 3,
          },
          graduationYears: {},
        },
        "2022": {
          total: 7,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 0,
          },
          graduationYears: {},
        },
        "2023": {
          total: 6,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 0,
          },
          graduationYears: {},
        },
        "2024": {
          total: 9,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 3,
          },
          graduationYears: {},
        },
      },
    },
    "945": {
      prodiCode: "945",
      prodiName: "Unknown Prodi",
      total: 40,
      statusBreakdown: {
        lulus: 37,
        undurDiri: 2,
        dikeluarkan: 1,
        aktif: 0,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 27,
        female: 13,
      },
      byBatch: {
        "2014": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2015": {
          total: 9,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 1,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 4,
          },
          graduationYears: {
            "3": 2,
            "4": 5,
          },
        },
        "2016": {
          total: 20,
          statusBreakdown: {
            lulus: 20,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 18,
            female: 2,
          },
          graduationYears: {
            "3": 9,
            "4": 2,
          },
        },
        "2017": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {
            "4": 1,
          },
        },
        "2018": {
          total: 9,
          statusBreakdown: {
            lulus: 9,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 5,
          },
          graduationYears: {
            "3": 4,
          },
        },
      },
    },
    "950": {
      prodiCode: "950",
      prodiName: "Pengelolaan Sumberdaya Air (PSDA)",
      total: 649,
      statusBreakdown: {
        lulus: 627,
        undurDiri: 10,
        dikeluarkan: 9,
        aktif: 1,
        cuti: 0,
        other: 2,
      },
      genderBreakdown: {
        male: 488,
        female: 161,
      },
      byBatch: {
        "2007": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2014": {
          total: 2,
          statusBreakdown: {
            lulus: 2,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 0,
          },
          graduationYears: {
            "3": 1,
            "4": 1,
          },
        },
        "2015": {
          total: 16,
          statusBreakdown: {
            lulus: 15,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 11,
            female: 5,
          },
          graduationYears: {
            "3": 12,
            "4": 2,
          },
        },
        "2016": {
          total: 11,
          statusBreakdown: {
            lulus: 11,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 5,
          },
          graduationYears: {
            "3": 6,
            "4": 2,
          },
        },
        "2017": {
          total: 17,
          statusBreakdown: {
            lulus: 17,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 11,
            female: 6,
          },
          graduationYears: {
            "3": 13,
            "4": 4,
          },
        },
        "2018": {
          total: 25,
          statusBreakdown: {
            lulus: 25,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 15,
            female: 10,
          },
          graduationYears: {
            "3": 16,
            "4": 6,
          },
        },
        "2019": {
          total: 74,
          statusBreakdown: {
            lulus: 72,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 62,
            female: 12,
          },
          graduationYears: {},
        },
        "2020": {
          total: 99,
          statusBreakdown: {
            lulus: 91,
            undurDiri: 6,
            dikeluarkan: 2,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 84,
            female: 15,
          },
          graduationYears: {},
        },
        "2021": {
          total: 118,
          statusBreakdown: {
            lulus: 115,
            undurDiri: 3,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 98,
            female: 20,
          },
          graduationYears: {},
        },
        "2022": {
          total: 100,
          statusBreakdown: {
            lulus: 97,
            undurDiri: 0,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 84,
            female: 16,
          },
          graduationYears: {},
        },
        "2023": {
          total: 80,
          statusBreakdown: {
            lulus: 77,
            undurDiri: 0,
            dikeluarkan: 3,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 63,
            female: 17,
          },
          graduationYears: {},
        },
        "2024": {
          total: 106,
          statusBreakdown: {
            lulus: 104,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 1,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 51,
            female: 55,
          },
          graduationYears: {},
        },
      },
    },
    "951": {
      prodiCode: "951",
      prodiName: "Unknown Prodi",
      total: 41,
      statusBreakdown: {
        lulus: 40,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 1,
      },
      genderBreakdown: {
        male: 36,
        female: 5,
      },
      byBatch: {
        "2019": {
          total: 7,
          statusBreakdown: {
            lulus: 7,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 2,
          },
          graduationYears: {},
        },
        "2020": {
          total: 4,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 0,
          },
          graduationYears: {},
        },
        "2021": {
          total: 3,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 1,
          },
          graduationYears: {},
        },
        "2022": {
          total: 1,
          statusBreakdown: {
            lulus: 1,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 0,
          },
          graduationYears: {},
        },
        "2023": {
          total: 8,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 0,
          },
          graduationYears: {},
        },
        "2024": {
          total: 18,
          statusBreakdown: {
            lulus: 17,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 1,
          },
          genderBreakdown: {
            male: 16,
            female: 2,
          },
          graduationYears: {},
        },
      },
    },
    "952": {
      prodiCode: "952",
      prodiName: "Profesi Arsitek",
      total: 11,
      statusBreakdown: {
        lulus: 0,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 11,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 0,
        female: 11,
      },
      byBatch: {
        "2024": {
          total: 11,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 11,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 11,
          },
          graduationYears: {},
        },
      },
    },
    "953": {
      prodiCode: "953",
      prodiName: "Unknown Prodi",
      total: 102,
      statusBreakdown: {
        lulus: 101,
        undurDiri: 1,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 50,
        female: 52,
      },
      byBatch: {
        "2019": {
          total: 34,
          statusBreakdown: {
            lulus: 33,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 15,
            female: 19,
          },
          graduationYears: {},
        },
        "2020": {
          total: 5,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 2,
          },
          graduationYears: {},
        },
        "2021": {
          total: 11,
          statusBreakdown: {
            lulus: 11,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 5,
            female: 6,
          },
          graduationYears: {},
        },
        "2022": {
          total: 14,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 9,
            female: 5,
          },
          graduationYears: {},
        },
        "2023": {
          total: 15,
          statusBreakdown: {
            lulus: 15,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 9,
            female: 6,
          },
          graduationYears: {},
        },
        "2024": {
          total: 23,
          statusBreakdown: {
            lulus: 23,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 9,
            female: 14,
          },
          graduationYears: {},
        },
      },
    },
    "954": {
      prodiCode: "954",
      prodiName: "Unknown Prodi",
      total: 27,
      statusBreakdown: {
        lulus: 27,
        undurDiri: 0,
        dikeluarkan: 0,
        aktif: 0,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 18,
        female: 9,
      },
      byBatch: {
        "2021": {
          total: 5,
          statusBreakdown: {
            lulus: 5,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 3,
            female: 2,
          },
          graduationYears: {},
        },
        "2022": {
          total: 8,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 2,
          },
          graduationYears: {},
        },
        "2023": {
          total: 8,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 7,
            female: 1,
          },
          graduationYears: {},
        },
        "2024": {
          total: 6,
          statusBreakdown: {
            lulus: 6,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 2,
            female: 4,
          },
          graduationYears: {},
        },
      },
    },
    "955": {
      prodiCode: "955",
      prodiName: "Unknown Prodi",
      total: 55,
      statusBreakdown: {
        lulus: 54,
        undurDiri: 0,
        dikeluarkan: 1,
        aktif: 0,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 43,
        female: 12,
      },
      byBatch: {
        "2019": {
          total: 17,
          statusBreakdown: {
            lulus: 17,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 11,
            female: 6,
          },
          graduationYears: {},
        },
        "2020": {
          total: 4,
          statusBreakdown: {
            lulus: 3,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 0,
          },
          graduationYears: {},
        },
        "2021": {
          total: 8,
          statusBreakdown: {
            lulus: 8,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 8,
            female: 0,
          },
          graduationYears: {},
        },
        "2022": {
          total: 11,
          statusBreakdown: {
            lulus: 11,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 10,
            female: 1,
          },
          graduationYears: {},
        },
        "2023": {
          total: 4,
          statusBreakdown: {
            lulus: 4,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 4,
            female: 0,
          },
          graduationYears: {},
        },
        "2024": {
          total: 11,
          statusBreakdown: {
            lulus: 11,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 5,
          },
          graduationYears: {},
        },
      },
    },
    "957": {
      prodiCode: "957",
      prodiName: "Terapan Perencanaan Kepariwisataan",
      total: 26,
      statusBreakdown: {
        lulus: 24,
        undurDiri: 1,
        dikeluarkan: 1,
        aktif: 0,
        cuti: 0,
        other: 0,
      },
      genderBreakdown: {
        male: 7,
        female: 19,
      },
      byBatch: {
        "2014": {
          total: 1,
          statusBreakdown: {
            lulus: 0,
            undurDiri: 0,
            dikeluarkan: 1,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 0,
            female: 1,
          },
          graduationYears: {},
        },
        "2016": {
          total: 14,
          statusBreakdown: {
            lulus: 14,
            undurDiri: 0,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 6,
            female: 8,
          },
          graduationYears: {
            "3": 4,
          },
        },
        "2018": {
          total: 11,
          statusBreakdown: {
            lulus: 10,
            undurDiri: 1,
            dikeluarkan: 0,
            aktif: 0,
            cuti: 0,
            other: 0,
          },
          genderBreakdown: {
            male: 1,
            female: 10,
          },
          graduationYears: {
            "3": 3,
          },
        },
      },
    },
  },
};

// ============== Helper Functions ==============

/**
 * Get overall statistics
 */
export function getOverallStatistics(): OverallStatistics {
  return ITB_STATISTICS;
}

/**
 * Get statistics for a specific batch year
 */
export function getBatchStatistics(batch: number): BatchStatistics | null {
  return ITB_STATISTICS.byBatch[batch] || null;
}

/**
 * Get all available batch years
 */
export function getAvailableBatches(): number[] {
  return Object.keys(ITB_STATISTICS.byBatch)
    .map(Number)
    .sort((a, b) => a - b);
}

/**
 * Get statistics for a specific prodi by code
 */
export function getProdiStatistics(prodiCode: string): ProdiStatistics | null {
  return ITB_STATISTICS.byProdi[prodiCode] || null;
}

/**
 * Get all available prodi codes
 */
export function getAvailableProdiCodes(): string[] {
  return Object.keys(ITB_STATISTICS.byProdi).sort();
}

/**
 * Get statistics for a specific prodi and batch combination
 */
export function getProdiBatchStatistics(
  prodiCode: string,
  batch: number,
): ProdiBatchStatistics | null {
  const prodi = ITB_STATISTICS.byProdi[prodiCode];
  if (!prodi) return null;
  return prodi.byBatch[batch] || null;
}

/**
 * Get graduation time distribution for a prodi and batch
 * Returns an object with years-to-graduate as keys and count as values
 */
export function getGraduationTimeDistribution(
  prodiCode: string,
  batch: number,
): GraduationByYears | null {
  const prodiBatch = getProdiBatchStatistics(prodiCode, batch);
  if (!prodiBatch) return null;
  return prodiBatch.graduationYears;
}

/**
 * Get summary text for a batch
 */
export function getBatchSummary(batch: number): string | null {
  const stats = getBatchStatistics(batch);
  if (!stats) return null;

  const parts: string[] = [];
  if (stats.statusBreakdown.lulus > 0)
    parts.push(`${stats.statusBreakdown.lulus} lulus`);
  if (stats.statusBreakdown.undurDiri > 0)
    parts.push(`${stats.statusBreakdown.undurDiri} undur diri`);
  if (stats.statusBreakdown.dikeluarkan > 0)
    parts.push(`${stats.statusBreakdown.dikeluarkan} dikeluarkan`);
  if (stats.statusBreakdown.aktif > 0)
    parts.push(`${stats.statusBreakdown.aktif} aktif`);
  if (stats.statusBreakdown.cuti > 0)
    parts.push(`${stats.statusBreakdown.cuti} cuti`);
  if (stats.statusBreakdown.other > 0)
    parts.push(`${stats.statusBreakdown.other} lainnya`);

  return `Batch ${batch}: ${stats.total} mahasiswa - ${parts.join(", ")}`;
}

/**
 * Get summary text for prodi + batch
 */
export function getProdiBatchSummary(
  prodiCode: string,
  batch: number,
): string | null {
  const prodi = getProdiStatistics(prodiCode);
  const stats = getProdiBatchStatistics(prodiCode, batch);
  if (!prodi || !stats) return null;

  const statusParts: string[] = [];
  if (stats.statusBreakdown.lulus > 0)
    statusParts.push(`${stats.statusBreakdown.lulus} lulus`);
  if (stats.statusBreakdown.undurDiri > 0)
    statusParts.push(`${stats.statusBreakdown.undurDiri} undur diri`);
  if (stats.statusBreakdown.dikeluarkan > 0)
    statusParts.push(`${stats.statusBreakdown.dikeluarkan} dikeluarkan`);
  if (stats.statusBreakdown.aktif > 0)
    statusParts.push(`${stats.statusBreakdown.aktif} aktif`);

  const gradParts: string[] = [];
  for (const [years, count] of Object.entries(stats.graduationYears).sort(
    (a, b) => Number(a[0]) - Number(b[0]),
  )) {
    gradParts.push(`${count} lulus dalam ${years} tahun`);
  }

  let summary = `${prodi.prodiName} Batch ${batch}: ${stats.total} mahasiswa (${stats.genderBreakdown.male} L, ${stats.genderBreakdown.female} P) - ${statusParts.join(", ")}`;
  if (gradParts.length > 0) {
    summary += `. Waktu kelulusan: ${gradParts.join(", ")}`;
  }

  return summary;
}
