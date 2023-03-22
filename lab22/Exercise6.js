// Exercise 6: remove all Possessions created more than week
// ago
gs.info("\n");
gs.info("Exercise #6: ");

var possessionGr = new GlideRecord('x_965246_library_c_possession');
possessionGr.addEncodedQuery('sys_created_on<=javascript:gs.endOfLastWeek()');
possessionGr.query();
possessionGr.deleteMultiple();
gs.info("DeleteRowCount: "+possessionGr.getRowCount());