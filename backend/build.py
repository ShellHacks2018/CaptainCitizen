import shutil
import os



def copyTree(src, dst, symlinks=False, ignore=None):
    for item in os.listdir(src):
        s = os.path.join(src, item)
        d = os.path.join(dst, item)
        if os.path.isdir(s):
            shutil.copytree(s, d, symlinks, ignore)
        else:
            shutil.copy2(s, d)

if __name__ == "__main__":
    src = r"C:\CaptainCitizen\frontend\build"
    dst = r"C:\CaptainCitizen\backend\client"
    try:
        shutil.rmtree(dst)
    except:
        pass

    try:    
        os.makedirs(dst)
    except:
        pass
    copyTree(src, dst)